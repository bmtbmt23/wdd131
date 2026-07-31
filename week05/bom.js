let d = new Date();
document.getElementById("currentYear").innerHTML =`&copy;${d.getFullYear()}`;
document.querySelector(`lastModified`).textContent = `lastModified:${document.lastModified}`;

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button addEventListener('click', () => {
  if (input.value != ''){
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

function displayList(item){
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function (){
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
  console.log("Joseph Smith: “I told the brethren that the Book of Mormon was the most correct of any book on earth, and the keystone of our religion, and a man would get nearer to God by abiding by its precepts, than by any other book” ");
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter){
  chapter = chapter.slice(0, chapter.lenght - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}