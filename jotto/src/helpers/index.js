/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - 추측한 단어
 * @param {string} secretWord - 시크릿 단어
 * @returns {number} - 추측한 단어와 시크릿 단어 간에 일치하는 문자의 수
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetters = secretWord.split('');
  const guessedLetterSet = new Set(guessedWord);
  return secretLetters.filter((letter) => guessedLetterSet.has(letter)).length;
}
