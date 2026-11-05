/* Local storage helpers and starter data */
(() => {
  const KEY = "oqs_v1";
  const now = () => new Date().toISOString();
  const starter = {
    users: [
      {id:"admin-1",name:"System Administrator",email:"admin@quiz.com",password:"Admin123!",role:"admin",createdAt:now()}
    ],
    quizzes: [
      {id:"quiz-computer",title:"Basic Computer Knowledge",description:"Test your understanding of computer fundamentals and common terminology.",duration:10,status:"published",createdAt:now(),questions:[
        {id:"q1",type:"multiple",text:"What does CPU stand for?",options:["Central Processing Unit","Computer Personal Unit","Central Program Utility","Control Processing Unit"],answer:0},
        {id:"q2",type:"true_false",text:"A keyboard is an input device.",options:["True","False"],answer:0},
        {id:"q3",type:"multiple",text:"Which of these is an operating system?",options:["Microsoft Word","Windows","Google Chrome","HTML"],answer:1},
        {id:"q4",type:"true_false",text:"RAM is a type of permanent storage.",options:["True","False"],answer:1},
        {id:"q5",type:"multiple",text:"Which device is commonly used to print documents?",options:["Scanner","Monitor","Printer","Speaker"],answer:2}
      ]},
      {id:"quiz-web",title:"Introduction to Web Development",description:"A short assessment covering HTML, CSS and JavaScript basics.",duration:12,status:"published",createdAt:now(),questions:[
        {id:"w1",type:"multiple",text:"Which language is used to structure a webpage?",options:["CSS","HTML","JavaScript","SQL"],answer:1},
        {id:"w2",type:"true_false",text:"CSS is used to style the appearance of web pages.",options:["True","False"],answer:0},
        {id:"w3",type:"multiple",text:"Which HTML element creates a hyperlink?",options:["<link>","<a>","<href>","<url>"],answer:1},
        {id:"w4",type:"true_false",text:"JavaScript can respond to user actions on a webpage.",options:["True","False"],answer:0}
      ]}
    ],
    attempts: [],
    settings: {version:1}
  };
  function read() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      if (saved && Array.isArray(saved.users) && Array.isArray(saved.quizzes) && Array.isArray(saved.attempts)) return saved;
    } catch (e) { console.warn("Could not read saved application data.", e); }
    localStorage.setItem(KEY, JSON.stringify(starter));
    return structuredClone(starter);
  }
  let db = read();
  function save(){ localStorage.setItem(KEY, JSON.stringify(db)); }
  function uid(prefix="id"){return prefix+"-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7);}
  window.Store = {
    get:()=>db,
    save,
    uid,
    reset:()=>{db=structuredClone(starter);save();},
    addUser(user){db.users.push({...user,id:uid("user"),createdAt:now()});save();},
    updateUser(id,changes){const u=db.users.find(x=>x.id===id);if(u){Object.assign(u,changes);save();}},
    addQuiz(quiz){db.quizzes.push({...quiz,id:uid("quiz"),createdAt:now()});save();},
    updateQuiz(id,changes){const q=db.quizzes.find(x=>x.id===id);if(q){Object.assign(q,changes);save();}},
    deleteQuiz(id){db.quizzes=db.quizzes.filter(q=>q.id!==id);save();},
    addAttempt(attempt){db.attempts.push({...attempt,id:uid("attempt"),submittedAt:now()});save();},
    currentUser:null
  };
})();
