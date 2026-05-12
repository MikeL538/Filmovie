// TYPES FOR TRANSLATIONS
type Language = keyof typeof translations;
type TranslationKey = keyof (typeof translations)['en-US'];

// TRANSLATION OBJECTS
// *Translations for notifications are in ui/notifications.ts*
const translations = {
  'en-US': {
    // Header
    home: 'Home',
    library: 'Saved',
    language: 'Language',
    placeholder: 'Movie search',
    error: 'Search result not successful. Enter the correct movie name.',
    libraryBtnWatched: 'watched',
    libraryBtnQueue: 'queue',

    // Modal Details
    vote: 'Rating / Votes',
    popularity: 'Popularity',
    orgTitle: 'Original Title',
    genre: 'Genre',
    about: 'About',
    btnWatched: 'add to watched',
    btnQueue: 'add to queue',

    // Home
    noMoreVidoes: 'No more videos to load',

    // Library
    btnDltWatched: 'delete from watched',
    btnDltQueued: 'delete from queue',
    emptyLibrary: 'Nothing to see here :(',

    // Login
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    password: 'Password',
    repeatPassword: 'Repeat password',
    wrongLoginOrPassword: 'Wrong login or password',
    notVerified: 'E-mail not verified',
    loginSendVerAgain: 'Send activation link again.',
    resendTooEarly: 'Too early request. You can resend verification link every 2 minutes.',
    forgotPassword: 'Forgot password',

    // Forgot password
    newPassword: 'New password',
    repeatNewPassword: 'Repeat new password',
    resetPassword: 'Reset password',

    // Register
    loginAlreadyExists: 'Login already exists',
    emailAlreadyExists: 'Email already exists',
    loginAndPasswordRequired: 'Login and password are required',
    tooManyRequests: 'Too many requests. Please try again later.',
    verifyEmail: 'Verification link sent to e-mail.',
    cancel: 'Cancel',
    verEmailFailed: 'Failed to send e-mail verification, [lack of service, log in to receive link]',
    loginTooShort: 'Login is too short',
    loginTooLong: 'Login is too long',
    passwordTooShort: 'Password is too short',
    passwordTooLong: 'Password is too long',
    passwordsDifferent: 'Passwords are different',
    acceptTerms: 'Accept rules',
    acceptRulesPrefix: 'Accept',
    acceptRulesButton: 'rules',

    // Rules
    rulesTitle: 'Terms and privacy notice for Filmovie',
    rulesUpdated: 'Last updated: May 12, 2026',
    rulesGeneralTitle: '1. General information',
    rulesGeneralDescription:
      'Filmovie is a non-commercial web application used to search for movies, view their descriptions and keep private lists of watched movies and movies saved to watch later.',
    rulesAdminInfo:
      'The operator of the application and administrator of user data is Michal Lipiak. Contact for application and personal data matters:',
    rulesAccountTitle: '2. User account',
    rulesAccountDescription:
      'Account registration is voluntary, but may be required to save movie lists on the server. During registration, the user provides a login, e-mail address and password. The user should provide a valid e-mail address and protect login data from third-party access.',
    rulesAccountForbidden:
      'It is prohibited to use the application in a way that violates the law, the rights of others, system security or service stability.',
    rulesPersonalDataTitle: '3. Personal data',
    rulesPersonalDataPurpose:
      'Personal data is processed to create and maintain the account, log in, save movie lists, handle password reset, ensure service security and contact the user about technical matters.',
    rulesPersonalDataBasis:
      "The basis for processing data is the performance of an electronic service agreement, the administrator's legitimate interest in maintaining application security and, where applicable, the user's consent.",
    rulesPersonalDataRights:
      'The user has the right to access, correct, delete, restrict processing, transfer data, object to processing and lodge a complaint with the President of the Personal Data Protection Office.',
    rulesDataScopeTitle: '4. Scope of processed data',
    rulesDataScopeAccount: 'account data: login, e-mail, password secured on the server side,',
    rulesDataScopeTechnical: 'technical data: session token stored in the browser after login,',
    rulesDataScopePreferences: 'local preferences: language, theme, watched list and watch queue,',
    rulesDataScopeFunctional: "functional data: movie IDs saved on the user's lists.",
    rulesDataStorage:
      'Data is stored for the duration of the account or for a shorter period if the user effectively requests deletion. Data stored locally in the browser can be deleted by logging out, clearing site data or using browser settings.',
    rulesDataDeletion:
      "A request to delete the account or data may be sent to the administrator's e-mail address provided in these terms.",
    rulesExternalServicesTitle: '5. External services',
    rulesExternalTmdb:
      'The application uses the external movie database The Movie Database (TMDB) to retrieve titles, descriptions, posters, ratings and other movie metadata. Filmovie is not affiliated with or endorsed by TMDB.',
    rulesExternalHosting:
      'Part of the server infrastructure may be handled by external hosting and technical mail providers, only to the extent necessary for the application to operate.',
    rulesBrowserStorageTitle: '6. Cookies and browser storage',
    rulesBrowserStorageDescription:
      'Filmovie may use browser storage, in particular localStorage and sessionStorage, to remember login, language, theme and movie lists. The application does not use this data for advertising profiling.',
    rulesLiabilityTitle: '7. Liability',
    rulesLiabilityDescription:
      'The application is provided for informational and educational purposes. The operator makes efforts to ensure the service works correctly, but does not guarantee uninterrupted availability or full correctness of data retrieved from external sources.',
    rulesChangesTitle: '8. Changes to the terms',
    rulesChangesDescription:
      'These terms may be changed due to application development, technical changes or legal changes. The current version is available in the registration form.',
  },
  'pl-PL': {
    // Header
    home: 'Start',
    library: 'Zapisane',
    language: 'Język',
    placeholder: 'Wyszukaj film',
    error: 'Wyszukiwanie nie powiodło się. Wprowadź prawidłową nazwę filmu.',
    libraryBtnWatched: 'obejrzane',
    libraryBtnQueue: 'kolejka',

    // Modal Details
    vote: 'Ocena / Głosów',
    popularity: 'Popularność',
    orgTitle: 'Oryginalny tytuł',
    genre: 'Kategoria',
    about: 'Opis',
    btnWatched: 'dodaj do obejrzanych',
    btnQueue: 'dodaj do kolejki',

    // Home
    noMoreVidoes: 'Brak kolejnych filmów do wyświetlenia',

    // Library
    btnDltWatched: 'usuń z oglądanych',
    btnDltQueued: 'usuń z kolejki',
    emptyLibrary: 'Nic tu nie ma :(',

    // Login
    login: 'Zaloguj',
    logout: 'Wyloguj',
    register: 'Zarejestruj',
    password: 'Hasło',
    repeatPassword: 'Powtórz hasło',
    wrongLoginOrPassword: 'Nieprawidłowy login lub hasło',
    notVerified: 'E-mail nie został aktywowany',
    loginSendVerAgain: 'Wyślij link aktywacyjny ponownie.',
    resendTooEarly:
      'Zbyt wczesna prośba. Ponowne wysłanie linku aktywującego jest możliwe co 2 minuty.',
    forgotPassword: 'Zapomniałem hasła',

    // Forgot password
    newPassword: 'Nowe hasło',
    repeatNewPassword: 'Powtórz nowe hasło',
    resetPassword: 'Resetuj hasło',

    // Register
    loginAlreadyExists: 'Login jest już zajęty',
    emailAlreadyExists: 'Email jest już zajęty',
    loginAndPasswordRequired: 'Login i hasło są wymagane',
    tooManyRequests: 'Zbyt wiele prób. Spróbuj ponownie później.',
    verifyEmail: 'E-mail weryfikacyjny został wysłany na e-mail.',
    cancel: 'Anuluj',
    verEmailFailed:
      'Błąd podczas wysyłania e-maila weryfikującego [brak usługi - zaloguj się aby otrzymać link]',
    loginTooShort: 'Login jest za krótki',
    loginTooLong: 'Login jest za długi',
    passwordTooShort: 'Hasło jest za krótkie',
    passwordTooLong: 'Hasło jest za długie',
    passwordsDifferent: 'Hasła są różne',
    acceptTerms: 'Zaakceptuj regulamin',
    acceptRulesPrefix: 'Akceptuję',
    acceptRulesButton: 'regulamin',

    // Rules
    rulesTitle: 'Regulamin i informacja o prywatności Filmovie',
    rulesUpdated: 'Ostatnia aktualizacja: 12 maja 2026 r.',
    rulesGeneralTitle: '1. Informacje ogólne',
    rulesGeneralDescription:
      'Filmovie jest niekomercyjną aplikacją internetową służącą do wyszukiwania filmów, przeglądania ich opisów oraz prowadzenia prywatnych list filmów obejrzanych i zapisanych do obejrzenia.',
    rulesAdminInfo:
      'Operatorem aplikacji i administratorem danych użytkowników jest Michał Lipiak. Kontakt w sprawach aplikacji i danych osobowych:',
    rulesAccountTitle: '2. Konto użytkownika',
    rulesAccountDescription:
      'Rejestracja konta jest dobrowolna, ale może być wymagana do zapisywania list filmów po stronie serwera. Podczas rejestracji użytkownik podaje login, adres e-mail i hasło. Użytkownik powinien podawać prawdziwy adres e-mail oraz chronić dane logowania przed dostępem osób trzecich.',
    rulesAccountForbidden:
      'Zabronione jest używanie aplikacji w sposób naruszający prawo, prawa innych osób, bezpieczeństwo systemu albo stabilność działania usługi.',
    rulesPersonalDataTitle: '3. Dane osobowe',
    rulesPersonalDataPurpose:
      'Dane osobowe są przetwarzane w celu utworzenia i obsługi konta, logowania, zapisywania list filmów, obsługi resetowania hasła, zapewnienia bezpieczeństwa usługi oraz kontaktu z użytkownikiem w sprawach technicznych.',
    rulesPersonalDataBasis:
      'Podstawą przetwarzania danych jest wykonanie umowy o świadczenie usługi drogą elektroniczną, uzasadniony interes administratora polegający na utrzymaniu bezpieczeństwa aplikacji oraz, gdy ma to zastosowanie, zgoda użytkownika.',
    rulesPersonalDataRights:
      'Użytkownik ma prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych.',
    rulesDataScopeTitle: '4. Zakres przetwarzanych danych',
    rulesDataScopeAccount:
      'dane konta: login, e-mail, hasło w postaci zabezpieczonej po stronie serwera,',
    rulesDataScopeTechnical: 'dane techniczne: token sesji zapisany w przeglądarce po zalogowaniu,',
    rulesDataScopePreferences:
      'preferencje lokalne: język, motyw, lista obejrzanych i lista do obejrzenia,',
    rulesDataScopeFunctional:
      'dane funkcjonalne: identyfikatory filmów zapisanych na listach użytkownika.',
    rulesDataStorage:
      'Dane są przechowywane przez czas posiadania konta albo krócej, jeśli użytkownik skutecznie zażąda ich usunięcia. Dane zapisane lokalnie w przeglądarce można usunąć przez wylogowanie, wyczyszczenie danych strony lub ustawienia przeglądarki.',
    rulesDataDeletion:
      'Żądanie usunięcia konta lub danych można wysłać na adres e-mail administratora podany w regulaminie.',
    rulesExternalServicesTitle: '5. Usługi zewnętrzne',
    rulesExternalTmdb:
      'Aplikacja korzysta z zewnętrznej bazy filmów The Movie Database (TMDB) w celu pobierania tytułów, opisów, plakatów, ocen i innych metadanych filmowych. Filmovie nie jest powiązane z TMDB ani przez TMDB zatwierdzone.',
    rulesExternalHosting:
      'Część infrastruktury serwerowej może być obsługiwana przez zewnętrznych dostawców hostingu i poczty technicznej, wyłącznie w zakresie potrzebnym do działania aplikacji.',
    rulesBrowserStorageTitle: '6. Pliki cookies i pamięć przeglądarki',
    rulesBrowserStorageDescription:
      'Filmovie może korzystać z pamięci przeglądarki, w szczególności localStorage i sessionStorage, aby zapamiętać logowanie, język, motyw oraz listy filmów. Aplikacja nie wykorzystuje tych danych do profilowania reklamowego.',
    rulesLiabilityTitle: '7. Odpowiedzialność',
    rulesLiabilityDescription:
      'Aplikacja jest udostępniana w celach informacyjnych i edukacyjnych. Operator dokłada starań, aby usługa działała prawidłowo, ale nie gwarantuje nieprzerwanej dostępności ani pełnej poprawności danych pobieranych z zewnętrznych źródeł.',
    rulesChangesTitle: '8. Zmiany regulaminu',
    rulesChangesDescription:
      'Regulamin może zostać zmieniony w przypadku rozwoju aplikacji, zmian technicznych lub zmian prawnych. Aktualna wersja regulaminu jest dostępna w formularzu rejestracji.',
  },
} as const;

const storedLanguage = localStorage.getItem('language');

export let currentLanguage: Language =
  storedLanguage === 'en-US' || storedLanguage === 'pl-PL' ? storedLanguage : 'en-US';

export function applyTranslations(): void {
  const elementsToTranslate = document.querySelectorAll<HTMLElement>('[data-translate]');
  const translationsForCurrentLanguage = translations[currentLanguage];

  elementsToTranslate.forEach(element => {
    const translationKey = element.dataset.translate as TranslationKey | undefined;
    if (!translationKey) return;

    if (element instanceof HTMLInputElement && translationKey === 'placeholder') {
      element.placeholder = translationsForCurrentLanguage[translationKey];
    } else {
      element.textContent = translationsForCurrentLanguage[translationKey];
    }
  });
}

export function language() {
  const enLangButton = document.querySelector<HTMLElement>('#enLang')!;
  const plLangButton = document.querySelector<HTMLElement>('#plLang')!;

  const switchLanguage = (language: Language): void => {
    currentLanguage = language;
    localStorage.setItem('language', language);
    applyTranslations();

    document.dispatchEvent(new Event('languageChanged'));
  };

  function langCheck() {
    const isEnglish = currentLanguage === 'en-US';

    enLangButton.style.display = isEnglish ? 'none' : 'block';
    plLangButton.style.display = isEnglish ? 'block' : 'none';
  }

  plLangButton.addEventListener('click', () => {
    if (currentLanguage !== 'pl-PL') {
      switchLanguage('pl-PL');
      langCheck();
    }
  });

  enLangButton.addEventListener('click', () => {
    if (currentLanguage !== 'en-US') {
      switchLanguage('en-US');
      langCheck();
    }
  });

  applyTranslations();
  langCheck();
}
