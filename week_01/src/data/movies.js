import shawshank_redemption from '../assets/images/shawshank_redemption.webp';
import inception from '../assets/images/inception.webp';
import godfather from '../assets/images/godfather.webp';

const movies = [
  {
    "title": "The Shawshank Redemption",
    "synopsis": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "tags": ["Drama", "Crime", "Hope"],
    thumbnail: shawshank_redemption
  },
  {
    "title": "Inception",
    "synopsis": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "tags": ["Sci-Fi", "Thriller", "Mind-Bending"],
    thumbnail: inception
  },
  {
    "title": "The Godfather",
    "synopsis": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "tags": ["Drama", "Crime", "Classic"],
    thumbnail: godfather
  }
];

export default movies;