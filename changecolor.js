let body = document.body;
          let isWhite = true;
      
          function toggleColor() {
            if (isWhite) {
              body.style.backgroundColor = 'black';
              body.style.color = 'white';
              isWhite = false;
            } else {
              body.style.backgroundColor = 'white';
              body.style.color = 'black';
              isWhite = true;
            }
        }