import { render } from './render';
import ListFilterView from './view/filters';
import ListSortingView from './view/sorting';
import creatingEventView from './view/creating-form';
import EventView from './view/route-point';
import presenter from './presenter/presenter';


const tripHeaderNode = document.querySelector('.trip-main');
const filterContainerNode = tripHeaderNode.querySelector(
  '.trip-controls__filters'
);

const tripMainNode = document.querySelector('.trip-events');

render(new ListFilterView(), filterContainerNode);
render(new ListSortingView(), tripMainNode);
render(new creatingEventView(), tripMainNode);
render(new EventView(), tripMainNode);
render(new EventView(), tripMainNode);
render(new EventView(), tripMainNode);

//засунуть все в список, сделать всё пунктами списка
