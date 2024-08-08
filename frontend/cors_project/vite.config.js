import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'http://localhost:3000',//the "proxy" will allow the selfmade server data to be served in frontend after the "/api" 
    }//⭐the "proxy" not only "append" the data every time the request through "/api" in "axios" request method to consume backend "api's" 
    //⭐⭐VERY.VERY.IMP:::but also it confirms the ⭐"server" by "proxy" that all request are "originated" from the root "http://localhost:3000" server url.
    //the request is not comming from the vite-react "http://localhost:5173/" url, which helps to prevent CROSS-ORIGIN-REQUEST problem.

  },
  plugins:[react()],
})
