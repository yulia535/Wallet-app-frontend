const renameCategories = category => {
  switch (category) {
    case 'main':
      return 'Основной';

    case 'food':
      return 'Еда';

    case 'car':
      return 'Авто';

    case 'development':
      return 'Развитие';

    case 'kids':
      return 'Дети';

    case 'home':
      return 'Дом';

    case 'education':
      return 'Образование';

    case 'rest':
      return 'Остальные';

    case 'mainIncome':
      return 'Регулярный доход';
    case 'restIncome':
      return 'Нерегулярный доход';

    default:
  }
};

export default renameCategories;