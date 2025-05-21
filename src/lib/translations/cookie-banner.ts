export type Language = "en" | "he" | "es" | "de";

export const translations = {
  en: {
    banner: {
      text: "We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.",
      preferences: "Preferences",
      acceptAll: "Accept all",
    },
    modal: {
      title: "Cookie Preferences",
      description:
        "Manage your cookie preferences below. Some cookies are essential and cannot be disabled.",
      necessary: {
        title: "Necessary",
        description:
          "These cookies are necessary for the website to function properly and cannot be switched off. They help with things like logging in and setting your privacy preferences.",
      },
      thirdParty: {
        title: "Third Parties",
        description:
          "Our website uses third-party services such as Landbot which may place their own cookies on your device. These services help us provide essential features like chat support and user interaction. Please note that these third parties may have their own privacy policies and cookie practices that we do not control.",
      },
      cancel: "Cancel",
      savePreferences: "Save Preferences",
    },
  },
  he: {
    banner: {
      text: "אנו מכבדים את זכותך לפרטיות. אתה יכול לבחור שלא לאפשר סוגים מסוימים של עוגיות. העדפות העוגיות שלך יחולו באתר שלנו.",
      preferences: "העדפות",
      acceptAll: "קבל הכל",
    },
    modal: {
      title: "העדפות עוגיות",
      description:
        "נהל את העדפות העוגיות שלך להלן. חלק מהעוגיות חיוניות ולא ניתן להשבית אותן.",
      necessary: {
        title: "חיוני",
        description:
          "עוגיות אלה נחוצות לתפקוד תקין של האתר ולא ניתן לכבות אותן. הן עוזרות בדברים כמו התחברות והגדרת העדפות הפרטיות שלך.",
      },
      thirdParty: {
        title: "צד שלישי",
        description:
          "האתר שלנו משתמש בשירותי צד שלישי כמו Landbot שעלולים להציב עוגיות משלהם במכשיר שלך. שירותים אלה עוזרים לנו לספק תכונות חיוניות כמו תמיכה בצ'אט ואינטראקציה עם משתמשים. שים לב שלצדדים שלישיים אלה עשויות להיות מדיניות פרטיות ופרקטיקות עוגיות משלהם שאיננו שולטים בהן.",
      },
      cancel: "ביטול",
      savePreferences: "שמור העדפות",
    },
  },
  es: {
    banner: {
      text: "Respetamos tu derecho a la privacidad. Puedes elegir no permitir algunos tipos de cookies. Tus preferencias de cookies se aplicarán en nuestro sitio web.",
      preferences: "Preferencias",
      acceptAll: "Aceptar todo",
    },
    modal: {
      title: "Preferencias de cookies",
      description:
        "Gestiona tus preferencias de cookies a continuación. Algunas cookies son esenciales y no se pueden desactivar.",
      necessary: {
        title: "Necesarias",
        description:
          "Estas cookies son necesarias para el funcionamiento adecuado del sitio web y no se pueden desactivar. Ayudan con cosas como iniciar sesión y configurar tus preferencias de privacidad.",
      },
      thirdParty: {
        title: "Terceros",
        description:
          "Nuestro sitio web utiliza servicios de terceros como Landbot que pueden colocar sus propias cookies en tu dispositivo. Estos servicios nos ayudan a proporcionar funciones esenciales como soporte de chat e interacción con el usuario. Ten en cuenta que estos terceros pueden tener sus propias políticas de privacidad y prácticas de cookies que no controlamos.",
      },
      cancel: "Cancelar",
      savePreferences: "Guardar preferencias",
    },
  },
  de: {
    banner: {
      text: "Wir respektieren Ihr Recht auf Privatsphäre. Sie können wählen, bestimmte Arten von Cookies nicht zuzulassen. Ihre Cookie-Einstellungen gelten für unsere gesamte Website.",
      preferences: "Einstellungen",
      acceptAll: "Alle akzeptieren",
    },
    modal: {
      title: "Cookie-Einstellungen",
      description:
        "Verwalten Sie Ihre Cookie-Einstellungen unten. Einige Cookies sind essentiell und können nicht deaktiviert werden.",
      necessary: {
        title: "Notwendig",
        description:
          "Diese Cookies sind für die ordnungsgemäße Funktion der Website erforderlich und können nicht deaktiviert werden. Sie helfen bei Dingen wie der Anmeldung und der Einstellung Ihrer Datenschutzeinstellungen.",
      },
      thirdParty: {
        title: "Drittanbieter",
        description:
          "Unsere Website verwendet Drittanbieterdienste wie Landbot, die ihre eigenen Cookies auf Ihrem Gerät platzieren können. Diese Dienste helfen uns, wesentliche Funktionen wie Chat-Support und Benutzerinteraktion bereitzustellen. Bitte beachten Sie, dass diese Drittanbieter ihre eigenen Datenschutzrichtlinien und Cookie-Praktiken haben können, die wir nicht kontrollieren.",
      },
      cancel: "Abbrechen",
      savePreferences: "Einstellungen speichern",
    },
  },
} as const;
