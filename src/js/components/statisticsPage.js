import {
  createElement, createStatisticsTable, hideStatTable, createDiffWordsSection,
  setStatisticsTableFunctionality, setGlobalValues,
} from '../utils/helper';
import { GET_VAR } from '../utils/variables';

const createStatisticsPage = () => {
  const statisticsData = GET_VAR('statisticData');
  // create statistics page
  const statisticsPage = createElement('div');
  statisticsPage.classList.add('statistics-page');

  // create statistics page container
  const statisticsPageContainer = createElement('div');
  statisticsPageContainer.classList.add('container');

  // create statistics page buttons container
  const statisticsPageButtons = createElement('div');
  statisticsPageButtons.classList.add('statistics-page__controls');

  // create repeat difficult words button
  const repeatBtn = createElement('button');
  repeatBtn.type = 'button';
  repeatBtn.disabled = true;
  repeatBtn.classList.add('statistics-page__controls-btn');
  repeatBtn.classList.add('repeat-btn');
  repeatBtn.textContent = 'Repeat difficult words';

  // create reset button
  const resetBtn = createElement('button');
  resetBtn.type = 'button';
  resetBtn.classList.add('statistics-page__controls-btn');
  resetBtn.classList.add('reset-btn');
  resetBtn.textContent = 'Reset statistic';

  statisticsPageButtons.append(repeatBtn);
  statisticsPageButtons.append(resetBtn);

  // create statistics page table
  const statisticsPageTable = createStatisticsTable(statisticsData);

  statisticsPageContainer.append(statisticsPageButtons);
  statisticsPageContainer.append(statisticsPageTable);

  statisticsPage.append(statisticsPageContainer);
  return statisticsPage;
};

const resetStatisticsBtnFunctionality = () => {
  const resetStatBtn = document.querySelector('.reset-btn');
  resetStatBtn.addEventListener('click', () => {
    localStorage.clear();
    setGlobalValues();
    const statisticsPage = document.querySelector('.statistics-page');
    const statisticsPageContainer = statisticsPage.querySelector('.container');
    const statisticsTable = document.querySelector('.stat-table');
    const statisticsData = GET_VAR('statisticData');
    statisticsTable.remove();
    statisticsPageContainer.append(createStatisticsTable(statisticsData));
    setStatisticsTableFunctionality();
    const repeatBtn = document.querySelector('.repeat-btn');
    repeatBtn.disabled = true;
  });
};

const repeatDiffWordsFunctionality = () => {
  const repeatDiffWordsBtn = document.querySelector('.repeat-btn');
  repeatDiffWordsBtn.addEventListener('click', () => {
    const repeatedDataSet = GET_VAR('repeatedDataSet');
    createDiffWordsSection(repeatedDataSet, 'Difficult words');
    hideStatTable();
  });
};

export { createStatisticsPage, repeatDiffWordsFunctionality, resetStatisticsBtnFunctionality };
