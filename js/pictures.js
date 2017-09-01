'use strict';

var COMMENTS_LIST = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var numberList = [];

var getNumberList = function () {
  for (var i = 0; i < 25; i++) {
    numberList[i] = i + 1;
  }
  return numberList;
};

getNumberList();

var getPictureUrl = function (number) {
  var src = 'photos/' + number + '.jpg';
  return src;
};

var min = 15;
var max = 200;

var getLikesAmount = function () {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getComments = function () {
  var rand = Math.floor(Math.random() * COMMENTS_LIST.length);
  return (COMMENTS_LIST[rand]);
};

var pictures = [];

var getPicturesArr = function () {
  var pictureName = [];
  while (numberList.length) {
    var index = Math.random() * numberList.length >> 0;
    var item = numberList.splice(index, 1)[0];
    pictureName.push(item);
  }
  for (var j = 0; j < 24; j++) {
    pictures[j] = {url: getPictureUrl(pictureName[j]), likes: getLikesAmount(), comments: getComments()};
  }
  return (pictures);
};

getPicturesArr();

var pictureList = document.querySelector('.pictures');

var pictureTemplate = document.querySelector('#picture-template').content;

var renderPicture = function (picture) {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('img').src = picture.url;
  pictureElement.querySelector('.picture-likes').textContent = picture.likes;
  pictureElement.querySelector('.picture-comments').textContent = picture.comments;

  return pictureElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < pictures.length; i++) {
  fragment.appendChild(renderPicture(pictures[i]));
}
pictureList.appendChild(fragment);

document.querySelector('.upload-overlay').classList.add('hidden');

document.querySelector('.gallery-overlay').classList.remove('hidden');

document.querySelector('.gallery-overlay-image').src = pictures[0].url;
document.querySelector('.likes-count').textContent = pictures[0].likes;
document.querySelector('.comments-count').textContent = pictures[0].comments;
