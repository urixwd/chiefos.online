# Cookie Preferences Banner - Functional Specification

## General Structure
A customized cookie preferences banner compliant with GDPR requirements, allowing users to manage consent for website cookies.

## Visual Design
- **Banner Background Color**: `#031D3A` (dark blue)
- **Text Color**: `#FFFFFF` (white)
- **Button Text Color**: `#FFFFFF` (white)
- **Banner Position**: Bottom right corner
- **Banner Width**: Maximum width of 28rem (max-w-md)
- **Banner Style**: Rounded corners with shadow

## Textual Content

### Main Banner Content
- **Introduction**: "We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website."

### Action Buttons (Main Banner)
1. **Preferences** - Opens the preferences modal
2. **Accept all** - Approves all types of cookies

### Language Support
- **Default**: English
- **Supported Languages**: 
  - English (en)
  - Hebrew (he)
  - Spanish (es)
  - German (de)
- **Language Selector**: Globe icon in top-right corner of banner
- **Language Detection**: Automatically detects browser language on first visit
- **Language Persistence**: Stored with cookie consent

### Preferences Modal
- **Title**: "Cookie Preferences"
- **Description**: "Manage your cookie preferences below. Some cookies are essential and cannot be disabled."

### Cookie Categories (in Modal)

1. **Necessary**
   - Description: These cookies are necessary for the website to function properly and cannot be switched off. They help with things like logging in and setting your privacy preferences.
   - Status: Toggle button (always on, disabled)

2. **Third Parties**
   - Description: Our website uses third-party services such as Landbot which may place their own cookies on your device. These services help us provide essential features like chat support and user interaction. Please note that these third parties may have their own privacy policies and cookie practices that we do not control.
   - Status: Toggle button (always on, disabled)

### Modal Action Buttons
1. **Save Preferences** - Saves the current preferences and closes the modal
2. **Cancel** - Closes the modal without saving changes

## Functional Specifications

1. **Placement**: 
   - Banner: Appears in bottom right corner on first visit
   - Modal: Opens in the center of the screen when "Preferences" is clicked

2. **Default Action**: No preference set in advance - user must choose

3. **Preference Storage**: 
   - Stored in localStorage or a dedicated preference cookie
   - Validity: 6 months or until cookies are cleared
   - Stores: consent status, timestamp, version, and selected language

4. **Re-access Option**: Link to privacy policy or button at the bottom of the site to reopen preferences

5. **Mobile Compatibility**: Responsive design suitable for small screens

## Technical Notes

1. Since all cookies are set to "always on," the system is simpler to implement - just need to record that the user has seen and agreed to the notice
2. Ensure documentation of user consent is stored (time, policy version)
3. Provide access to the site's full privacy policy from within the banner
4. Modal should have a semi-transparent backdrop and close when clicking outside
5. Modal should be accessible via keyboard navigation and screen readers
6. Support RTL layout for Hebrew language
7. Language selection should be immediately reflected in both banner and modal
8. Language preference should persist across sessions

Note: The described UX presents all cookies as necessary ("always on"). If analytics, marketing, or other non-essential cookies are added in the future, users should be given the option to turn them on/off separately.