jQuery('document').ready(function() {
    quotes = [
      {
        "epoch": "Патристика",
        "phrase": "Люди - разные светильники",
        "signature": "Августин Аврелий"
      },
      
      {
        "epoch": "Патристика",
        "phrase": "Верую, чтобы понимать",
        "signature": "Августин Аврелий"
      },
      
      {
        "epoch": "Общее Возрождение",
        "phrase": "Человек - это смертный Бог",
        "signature": "Петрарка"
      },
      
      {
        "epoch": "Предвозрождение",
        "phrase": "У человека двойное предназначение - божественное и земное",
        "signature": "Данте"
      },
        
      {
        "epoch": "Раннее Возрождение",
        "phrase": "Философия – это поэзия образов",
        "signature": "Петрарка"
      },
        
      {
        "epoch": "Раннее Возрождение",
        "phrase": "Нам нужны художники, а не маляры",
        "signature": "Петрарка"
      },
        
      {
        "epoch": "Раннее Возрождение",
        "phrase": "Лучше желать, чем знать истину",
        "signature": "Петрарка"
      },
        
      {
        "epoch": "Раннее Возрождение",
        "phrase": "Лучше быть здоровым, чем красивым",
        "signature": "Петрарка"
      },
        
      {
        "epoch": "Раннее Возрождение",
        "phrase": "Сколько ты должен обществу, столько общество должно тебе",
        "signature": "Петрарка"
      }
      
      
    ]
    amount_q = quotes.length
    number_quote = Math.floor(Math.random() * amount_q);
    author_and_era = quotes[number_quote]["signature"] + ", " + quotes[number_quote]["epoch"]
    jQuery('#quote').html(quotes[number_quote]["phrase"])
    jQuery('#author_and_era').html(author_and_era)
    
    
    
    
})