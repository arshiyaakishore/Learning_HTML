const videoGrid = document.querySelector('.video-grid');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');

// Sample video data (replace with API calls or database queries)
const videos = [
    {
        id: 1,
        title: 'Video 1',
        description: 'This is a sample video',
        thumbnail: 'https://via.placeholder.com/150x150',
    },
    {
        id: 2,
        title: 'Video 2',
        description: 'This is another sample video',
        thumbnail: 'https://via.placeholder.com/150x150',
    },
    {
        id: 3,
        title: 'Video 3',
        description: 'This is yet another sample video',
        thumbnail: 'https://via.placeholder.com/150x150',
    },
    // Add more video objects here
];

// Render video cards
videos.forEach((video) => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';

    const videoThumbnail = document.createElement('img');
    videoThumbnail.src = video.thumbnail;
    videoThumbnail.alt = video.title;

    const videoTitle = document.createElement('h2');
    videoTitle.className = 'video-title';
    videoTitle.textContent = video.title;

    const videoDesc = document.createElement('p');
    video

    // Set background color of body to red
document.body.style.backgroundColor = "red";

// Set background color of header to black
document.querySelector("header").style.backgroundColor = "black";

// Set background color of video grid to white
document.querySelector(".video-grid").style.backgroundColor = "white";