var $navH1 = document.querySelector('.navh1');
var $navH2 = document.querySelector('.navh2')
$navH2.addEventListener('click', resetQuiz)
var $body = document.querySelector('body');

var $startQuiz = document.querySelector('#start');
$startQuiz.addEventListener('click', startQuizModal);
var $startModal = document.querySelector('.modal-background')
function startQuizModal(){
    $startModal.className = "modal-background"
}

var $cancelButton = document.querySelector('#cancel');
var $submitButton = document.querySelector('#submit');


$cancelButton.addEventListener('click', hideQuizModal);
function hideQuizModal(){
    $startModal.className = "modal-background hidden"
}
$submitButton.addEventListener('click', startQuiz);

var $homePage = document.querySelector('div[data-view="home"]')
var $quizPage = document.querySelector('div[data-view="quiz"]')
function startQuiz(){
    $startModal.className = "modal-background hidden"
    $homePage.className = "container hidden"
    $quizPage.className = "container"
    $body.className = "blueBackground"
    $navH1.textContent = "Question " + dataModel.questionNumber
    $navH2.className = "navH2 pokemon-font"
}

function resetQuiz(){
    $homePage.className = "container";
    $quizPage.className = "container hidden"
    $body.className = "";
    $navH1.textContent = "Pokemon Quiz Game";
    $navH2.className = "navH2 pokemon-font hidden"
}