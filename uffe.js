document
  .querySelectorAll(
    "title,h1,h1,h3,h4,h5,p,li,td,th,caption,span,a,blockquote,b,strong,cite,u"
  )
  ?.forEach((t) => {
    t.innerHTML = t.innerHTML.replaceAll(
      /(Ulf Kristersson)|(Kristersson)/g,
      "Uffe"
    );
  });
