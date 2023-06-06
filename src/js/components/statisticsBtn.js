import {
  createElement, createStatisticsTable, setGlobalValues,
  setStatisticsTableFunctionality, showStatTable,
} from '../utils/helper';
import { GET_VAR } from '../utils/variables';

// create header statistics button
const createStatisticsBtn = () => {
  const statBtn = createElement('button');
  statBtn.type = 'button';
  statBtn.classList.add('statistics-button');
  statBtn.textContent = 'Statistics';

  return statBtn;
};

const statisticsBtnFunctionality = () => {
  const statBtn = document.querySelector('.statistics-button');
  statBtn.addEventListener('click', () => {
    console.log('click statistics btn');
    setGlobalValues();
    const statisticsPage = document.querySelector('.statistics-page');
    const statisticsPageContainer = statisticsPage.querySelector('.container');
    const statisticsTable = document.querySelector('.stat-table');
    const statisticsData = GET_VAR('statisticData');
    statisticsTable.remove();
    statisticsPageContainer.append(createStatisticsTable(statisticsData));
    setStatisticsTableFunctionality();
    showStatTable();
  });
};

export { createStatisticsBtn, statisticsBtnFunctionality };
