'use strict';

var COMMENTS_LIST = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var getPictureUrl = function (src) {
  for (i = 1; i <= 25; i++) {
    src = 'photos/{{i}}.jpg';
  }
  return src;
};

var getLikesAmount = function (min, max) {
  min = 15;
  max = 200;
  return Math.random() * (max - min) + min;
};

var getComments = function (rand) {
  rand = Math.floor(Math.random() * COMMENTS_LIST.length);
  return (COMMENTS_LIST[rand]);
};

var pictures = [
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(),
    likes: getLikesAmount(),
    comments: getComments()
  }
]; // Наверное, тут должна быть функция, которая генерирует 25 объектов, но я не понимаю, как ее написать

var pictureList = document.querySelector('.pictures');

var pictureTemplate = document.querySelector('#picture-template').content;

var renderPicture = function (picture) {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('img').getAttribute('src') = picture.url;
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

document.querySelector('.gallery-overlay-image').getAttribute('src') = pictures[0].url;
document.querySelector('.likes-count').textContent = pictures[0].likes;
document.querySelector('.comments-count').textContent = pictures[0].comments;
