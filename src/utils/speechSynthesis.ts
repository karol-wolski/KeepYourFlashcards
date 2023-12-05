const speechSynthesis = (txt: string, lang: string) => {
  const msg = new SpeechSynthesisUtterance()
  msg.text = txt || ''
  msg.lang = lang
  window.speechSynthesis.speak(msg)
}

export default speechSynthesis
