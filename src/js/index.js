import '../scss/main.scss';
import createHeader from './components/header';

const appWrapper = document.querySelector('.wrapper');

appWrapper.append(createHeader());
// console.log('data', data);
