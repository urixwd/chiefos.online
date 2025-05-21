import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Switch from "@radix-ui/react-switch";
import { translations, type Language } from "../lib/translations/cookie-banner";
import "./CookieBanner.css";

const COOKIE_CONSENT_KEY = "cookie_consent";
const COOKIE_CONSENT_VERSION = "1.0";

const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  he: "עברית",
  es: "Español",
  de: "Deutsch",
};

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
      // Detect browser language
      const browserLang = navigator.language.split("-")[0] as Language;
      if (["en", "he", "es", "de"].includes(browserLang)) {
        setLanguage(browserLang);
      }
    }
  }, []);

  const handleAccept = () => {
    const consentData = {
      version: COOKIE_CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      accepted: true,
      language,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    handleAccept();
    setIsModalOpen(false);
  };

  if (!isVisible) return null;

  const t = translations[language];
  const isRTL = language === "he";

  return (
    <>
      <div className={`cookie-banner ${isRTL ? "rtl" : ""}`}>
        <div className="cookie-banner-content">
          <div className="cookie-banner-header">
            <p className="cookie-banner-text">{t.banner.text}</p>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="language-button">
                🌐
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="language-dropdown">
                {Object.entries(LANGUAGE_NAMES).map(([code, name]) => (
                  <DropdownMenu.Item
                    key={code}
                    className={`language-item ${
                      language === code ? "selected" : ""
                    }`}
                    onClick={() => setLanguage(code as Language)}
                  >
                    {name}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          <div className="cookie-banner-buttons">
            <button
              className="preferences-button"
              onClick={() => setIsModalOpen(true)}
            >
              {t.banner.preferences}
            </button>
            <button className="accept-button" onClick={handleAccept}>
              {t.banner.acceptAll}
            </button>
          </div>
        </div>
      </div>

      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content className={`dialog-content ${isRTL ? "rtl" : ""}`}>
            <Dialog.Title className="dialog-title">
              {t.modal.title}
            </Dialog.Title>
            <Dialog.Description className="dialog-description">
              {t.modal.description}
            </Dialog.Description>

            <div className="preferences-section">
              <div className="preference-item">
                <div className="preference-info">
                  <h4 className="preference-title">
                    {t.modal.necessary.title}
                  </h4>
                  <p className="preference-description">
                    {t.modal.necessary.description}
                  </p>
                </div>
                <Switch.Root className="switch" checked disabled>
                  <Switch.Thumb className="switch-thumb" />
                </Switch.Root>
              </div>

              <div className="preference-item">
                <div className="preference-info">
                  <h4 className="preference-title">
                    {t.modal.thirdParty.title}
                  </h4>
                  <p className="preference-description">
                    {t.modal.thirdParty.description}
                  </p>
                </div>
                <Switch.Root className="switch" checked disabled>
                  <Switch.Thumb className="switch-thumb" />
                </Switch.Root>
              </div>
            </div>

            <div className="dialog-footer">
              <button
                className="cancel-button"
                onClick={() => setIsModalOpen(false)}
              >
                {t.modal.cancel}
              </button>
              <button className="save-button" onClick={handleSavePreferences}>
                {t.modal.savePreferences}
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
