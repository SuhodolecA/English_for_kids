import {
  createElement, createStatisticsTable, setGlobalValues,
  setStatisticsTableFunctionality, showStatTable,
} from '../utils/helper';
import { GET_VAR, SET_VAR } from '../utils/variables';

// create header statistics button
const createStatisticsBtn = () => {
  const statBtn = createElement('button');
  statBtn.type = 'button';
  statBtn.classList.add('statistics-button');
  statBtn.textContent = 'Statistics';

  return statBtn;
};

const setStatisticsBtnFunctionality = () => {
  const statBtn = document.querySelector('.statistics-button');
  statBtn.addEventListener('click', () => {
    setGlobalValues();
    const statisticsPage = document.querySelector('.statistics-page');
    const statisticsPageContainer = statisticsPage.querySelector('.container');
    const statisticsTable = document.querySelector('.stat-table');
    const statisticData = GET_VAR('statisticData').slice();
    statisticsTable.remove();
    statisticsPageContainer.append(createStatisticsTable(statisticData));
    const repeatBtn = document.querySelector('.repeat-btn');
    statisticData.sort((a, b) => {
      const elem1 = a['Accuracy %'];
      const elem2 = b['Accuracy %'];

      return elem1 - elem2;
    });
    const repeatedData = statisticData.filter((item) => item['Accuracy %'] !== 'n/e' && item['Accuracy %'] !== 100)
      .slice(0, 8)
      .map((elem) => elem.Translation);

    const repeatedDataSet = GET_VAR('data')
      .filter((item) => item.sectionWords)
      .map((elem) => elem.sectionWords)
      .flat()
      .filter((item) => repeatedData.includes(item.translation));
    SET_VAR('repeatedDataSet', repeatedDataSet);
    if (repeatedDataSet.length !== 0) {
      repeatBtn.disabled = false;
    } else {
      repeatBtn.disabled = true;
    }
    setStatisticsTableFunctionality();

    showStatTable();
  });
};

export { createStatisticsBtn, setStatisticsBtnFunctionality };
