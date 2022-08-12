const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  console.log(array[random]);
  return array[random];
}

const storyText =
  "It was 94 fahrenheit outside, so :randomNames: went for a walk. When they got to :randomPlaces:, they stared in horror for a few moments, then :randomPhrases:. Bob saw the whole thing, but was not surprised — :randomNames: weighs 300 pounds, and it was a hot day.";

const randomNames = ["Willy the Goblin", "Big Daddy", "Father Christmas", "Fernando Jojoa", "Stuart Grajan"];

const randomPlaces = ["the soup kitchen", "Disneyland", "the White House", "Pandora", "Universal Studio"];

const randomPhrases = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(randomNames);
  const yItem = randomValueFromArray(randomPlaces);
  const zItem = randomValueFromArray(randomPhrases);

  newStory = newStory.replaceAll(":randomNames:", xItem);
  newStory = newStory.replace(":randomPlaces:", yItem);
  newStory = newStory.replace(":randomPhrases:", zItem);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
    customName.value = "";
  }

  if (document.getElementById("uk").checked) {
    const weight = (Math.round(300) / 14);
    const temperature = (Math.round(94) - 32) * (5 / 9);

    newStory = newStory.replace("94 fahrenheit", temperature.toFixed(2) + " centigrades");
    newStory = newStory.replace("300 pounds", weight.toFixed(2) + " stone");
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
  
}
