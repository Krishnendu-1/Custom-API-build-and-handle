import { configDotenv } from 'dotenv';
import express from 'express'
const PORT=process.env.PORT || 3000;
const app = express();
app.get('/',(req,res)=>{
 res.send("Welcome to the custom description server!");
})
app.get('/api/desc',(req,res)=>{
    const arr=[
        {
            "name": "Krishnendu Roy",
            "language": "Sanskrit",
            "id": "V59OF92YF627HFY0",
            "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
            "version": 6.1
          },
          {
            "name": "Rahul Pal",
            "language": "Bangla",
            "id": "ENTOCR13RSCLZ6KU",
            "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
            "version": 1.88
          },
          {
            "name": "Rakesh Ghosh",
            "language": "English",
            "id": "IAKPO3R4761JDRVG",
            "bio": "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
            "version": 7.27
          },
          {
            "name": "Swapnendu Kolay",
            "language": "Bengali",
            "id": "5ZVOEPMJUI4MB4EN",
            "bio": "Donec lobortis eleifend condimentum. Morbi ac tellus erat.",
            "version": 2.53
          },
          {
            "name": "Disha Basu",
            "language": "Uyghur",
            "id": "6VTI8X6LL0MMPJCC",
            "bio": "Vivamus id faucibus velit, id posuere leo. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Suspendisse potenti.",
            "version": 6.49
          },
          {
            "name": "Ani Chowdhury",
            "language": "Uyghur",
            "id": "F2KEU5L7EHYSYFTT",
            "bio": "Duis commodo orci ut dolor iaculis facilisis. Morbi ultricies consequat ligula posuere eleifend. Aenean finibus in tortor vel aliquet. Fusce eu ultrices elit, vel posuere neque.",
            "version": 1.9
          },
          {
            "name": "Joy Roy",
            "language": "Uyghur",
            "id": "LO6DVTZLRK68528I",
            "bio": "Vivamus id faucibus velit, id posuere leo. Nunc aliquet sodales nunc a pulvinar. Nunc aliquet sodales nunc a pulvinar. Ut viverra quis eros eu tincidunt.",
            "version": 5.9
          },
          {
            "name": "Arit Kalal",
            "language": "Sindhi",
            "id": "LJRIULRNJFCNZJAJ",
            "bio": "Etiam malesuada blandit erat, nec ultricies leo maximus sed. Fusce congue aliquam elit ut luctus. Etiam malesuada blandit erat, nec ultricies leo maximus sed. Cras dictum dolor lacinia lectus vehicula rutrum. Integer vehicula, arcu sit amet egestas efficitur, orci justo interdum massa, eget ullamcorper risus ligula tristique libero.",
            "version": 9.32
          },
          {
            "name": "Bumba bal",
            "language": "Galician",
            "id": "JMCL0CXNXHPL1GBC",
            "bio": "Fusce eu ultrices elit, vel posuere neque. Morbi ac tellus erat. Nunc tincidunt laoreet laoreet.",
            "version": 5.21
          }
    ]
    res.json(arr);

})

app.listen(PORT,()=>{
    console.log(`listening at http://localhost:${PORT}`);

})

