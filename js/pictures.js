'use strict';

var COMMENTS_LIST = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

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

var pictures = [
  {
    url: getPictureUrl(1),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(2),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(3),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(4),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(5),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(6),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(7),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(8),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(9),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(10),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(11),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(12),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(13),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(14),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(15),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(16),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(17),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(18),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(19),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(20),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(21),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(22),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(23),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(24),
    likes: getLikesAmount(),
    comments: getComments()
  },
  {
    url: getPictureUrl(25),
    likes: getLikesAmount(),
    comments: getComments()
  }
]; // Наверное, тут должна быть функция, которая генерирует 25 объектов, но я не понимаю, как ее написать

var pictureList = document.querySelector('.pictures');

var pictureTemplate = document.querySelector('#picture-template').content;

var renderPicture = function (picture) {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('img').setAttribute('src') = picture.url;
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

document.querySelector('.gallery-overlay-image').setAttribute('src') = pictures[0].url;
document.querySelector('.likes-count').textContent = pictures[0].likes;
document.querySelector('.comments-count').textContent = pictures[0].comments;
