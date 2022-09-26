const element = document.querySelector('#select');
const choices = new Choices(element,{
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
});

ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [48.872185073737896,2.354223999999991],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14
  });
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [48.872185073737896,2.354223999999991], // координаты точки
    },
  });
   // Вспомогательный класс, который можно использовать вместо GeoObject c типом геометрии «Point» (см. предыдущий пример) - можно добавлять свои метки:
    var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/customPoint.svg', // Путь до нашей картинки из index.html
    iconImageSize: [28, 60], // Размер по ширине и высоте
    iconImageOffset: [-42, -42]  // Смещение левого верхнего угла иконки относительно её «ножки» (точки привязки).
  });
  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

tippy('[data-tippy-content]');

tippy('.tooltip-custom', {
  trigger: 'click',
});

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+1 (999)-999-99-99");
im.mask(selector);

const validation = new JustValidate('.form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    fontSize: '12px',
    color: '#FF5C00',
  },
  focusInvalidField: true,
});

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'What is your name?',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Name can't be shorter than 2 symbols",
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: "Name can't be longer than 30 symbols",
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Phone is required',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]) ;

