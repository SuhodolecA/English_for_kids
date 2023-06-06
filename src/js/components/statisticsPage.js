import data from '../../assets/data/data.json';
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
    console.log('click reset btn');
    localStorage.clear();
    setGlobalValues();
    const statisticsPage = document.querySelector('.statistics-page');
    const statisticsPageContainer = statisticsPage.querySelector('.container');
    const statisticsTable = document.querySelector('.stat-table');
    const statisticsData = GET_VAR('statisticData');
    statisticsTable.remove();
    statisticsPageContainer.append(createStatisticsTable(statisticsData));
    setStatisticsTableFunctionality();
  });
};

const repeatDiffWordsFunctionality = () => {
  const repeatDiffWordsBtn = document.querySelector('.repeat-btn');
  repeatDiffWordsBtn.addEventListener('click', () => {
    const statisticData = GET_VAR('statisticData').slice();
    console.log('click repeat');
    console.log('statisticData', statisticData.sort((a, b) => {
      const elem1 = a['Accuracy %'];
      const elem2 = b['Accuracy %'];

      return elem1 - elem2;
    }));
    const repeatedData = statisticData.filter((item) => item['Accuracy %'] !== 0 && item['Accuracy %'] !== 100)
      .slice(0, 8)
      // .filter((item) => item[['Accuracy %']] !== 0)
      .map((elem) => elem.Translation);
    const repeatedDataSet = data
      .filter((item) => item.sectionWords)
      .map((elem) => elem.sectionWords)
      .flat()
      .filter((item) => repeatedData.includes(item.translation));
    console.log('repeatedData', repeatedData);
    console.log('repeatedDataSet', repeatedDataSet);
    if (repeatedDataSet.length === 0) {
      console.log('You dont have difficult words!');
      return;
    }
    createDiffWordsSection(repeatedDataSet, 'Difficult words');
    hideStatTable();
  });
};

export { createStatisticsPage, repeatDiffWordsFunctionality, resetStatisticsBtnFunctionality };
