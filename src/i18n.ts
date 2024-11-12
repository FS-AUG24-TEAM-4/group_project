import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        thankYouForPurchase: 'Thank you for purchase!',
        completePurchase: 'Complete your purchase',
        None: 'None',
        Newest: 'Newest',
        Oldest: 'Oldest',
        PriceHigh: 'Price high',
        PriceLow: 'Price low',
        Select: 'Select...',
        welcome: 'Welcome to Nice Gadgets store!',
        goBackHome: 'Go back home',
        notFound: 'Page not found',
        home: 'home',
        phones: 'Phones',
        Phones: 'Phones',
        tablets: 'Tablets',
        Tablets: 'Tablets',
        accessories: 'Accessories',
        Accessories: 'Accessories',
        newModels: 'Brand new models',
        shopByCategory: 'Shop by category',
        hotPrices: 'Hot prices',
        mobile: 'Mobile Phones',
        models: 'models',
        model: 'model',
        aboutUs: 'About us',
        rights: 'Rights',
        toTop: 'Back to top',
        screen: 'Screen',
        capacity: 'capacity',
        size: 'size',
        Size: 'Size',
        ram: 'RAM',
        added: 'Added',
        addToCart: 'Add to cart',
        Alphabetically: 'Alphabetically',
        Cheapest: 'Cheapest',
        Sortby: 'Sort by',
        itemsOnPage: 'Items on page',
        All: 'All',
        favorites: 'Favorites',
        back: 'Back',
        cart: 'Cart',
        total: 'Total',
        totalFor: 'Total for',
        items: 'items',
        item: 'item',
        checkout: 'Checkout',
        empty: 'Your cart is empty',
        recommended: 'You may also like',
        colors: 'Available colors',
        select: 'Select',
        resolution: 'Resolution',
        processor: 'Processor',
        about: 'About',
        techSpecs: 'Tech specs',
        memory: 'Built in memory',
        camera: 'Camera',
        dual: 'Dual',
        triple: 'Triple',
        zoom: 'Zoom',
        cell: 'Cell',
        checkoutConfirm: 'Do you confirm the checkout?',
        product: 'Product',
        quantity: 'Quantity',
        price: 'Price',
        totalPrice: 'Total Price',
        confirm: 'Confirm',
        cancel: 'Cancel',
        noFavorites: 'No favorites yet',
        emptyCart: 'Your cart is empty',
        notApplicable: 'Not applicable',
        creators: 'Creators',
        description: `Sorry, we can’t find the page you’re looking for. It may have been
        moved, renamed, or it’s possible the link was incorrect. Please check
        the URL or return to the homepage.`,
      },
    },
    ua: {
      translation: {
        thankYouForPurchase: 'Дякуємо за купівлю!',
        completePurchase: 'Підтвердіть купівлю',
        None: 'Нічим',
        Newest: 'Новизною',
        Oldest: 'Найстарішими',
        PriceHigh: 'Найвищою ціною',
        PriceLow: 'Найнижчою ціною',
        Select: 'Оберіть...',
        welcome: 'Ласкаво просимо до Nice Gadgets store!',
        goBackHome: 'На головну сторінку',
        notFound: 'Сторінку не знайдено',
        home: 'Головна',
        Home: 'Головна',
        phones: 'Телефони',
        Phones: 'Телефони',
        tablets: 'Планшети',
        Tablets: 'Планшети',
        accessories: 'Аксесуари',
        Accessories: 'Аксесуари',
        newModels: 'Нові моделі',
        shopByCategory: 'Вибрати за категорією',
        hotPrices: 'Гарячі ціни',
        mobile: 'Мобільні телефони',
        models: 'моделей',
        model: 'модель',
        aboutUs: 'Про нас',
        rights: 'Права',
        toTop: 'Наверх сторінки',
        screen: 'Екран',
        capacity: "пам'ять",
        Capacity: "Пам'ять",
        size: 'розмір',
        Size: 'Розмір',
        ram: "Оперативна пам'ять",
        added: 'Товар додано ',
        addToCart: 'Додати товар',
        Alphabetically: 'Алфавітом',
        Cheapest: 'Ціною',
        Sortby: 'Сортувати за',
        itemsOnPage: 'Товарів на сторінці',
        All: 'Всі',
        favorites: 'Улюблені',
        back: 'Назад',
        cart: 'Кошик',
        total: 'Всього',
        totalFor: 'Всього за',
        items: 'товарів',
        item: 'товар',
        checkout: 'Розрахуватись',
        empty: 'Ваш кошик пустий',
        recommended: 'Рекомендуємо',
        colors: 'Наявні кольори',
        select: 'Обрати',
        resolution: 'Роздільна здатність',
        processor: 'Процессор',
        about: 'Про модель',
        techSpecs: 'Технічні характеристики',
        memory: "Вбудована пам'ять",
        camera: 'Камера',
        dual: 'Подвійна',
        triple: 'Потрійна',
        zoom: 'Зум камери',
        cell: 'Технології',
        checkoutConfirm: 'Ви підтверджуєте покупку?',
        product: 'Товар',
        quantity: 'Кількість',
        price: 'Ціна',
        totalPrice: 'Загальна вартість',
        confirm: 'Підтвердити',
        cancel: 'Відмінити',
        noFavorites: 'Немає улюблених товарів',
        emptyCart: 'Ваш кошик порожній',
        notApplicable: 'Не передбачено',
        creators: 'Автори',
        description: `На жаль, ми не можемо знайти сторінку, яку ви шукаєте. 
        Можливо, її було переміщено, перейменовано або посилання було неправильним. 
        Будь ласка, перевірте URL-адресу або поверніться на головну сторінку.`,
      },
    },
  },
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
