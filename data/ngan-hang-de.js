/* ============================================================
   NGÂN HÀNG ĐỀ KHẢO SÁT NĂNG LỰC TIẾNG ANH GIÁO VIÊN
   3 cấp: Tiểu học (A2) · THCS (B1) · THPT (B2)
   Mỗi cấp có NHIỀU ĐỀ (des[]). Cấu trúc mỗi đề: Nghe – Đọc – Use of English – Viết – Nói
   Dùng chung cho engine "khao-sat.html"
   ============================================================ */
window.NGAN_HANG = {

/* =====================================================================
   ============================ TIỂU HỌC (A2) ==========================
   ===================================================================== */
tieuhoc: {
  code:'tieuhoc', label:'Tiểu học', bac:'Bậc 2 (A1→A2)', minutes:35,
  des:[
  /* ---------------------- ĐỀ 1 ---------------------- */
  { id:'de1', name:'Đề 1 — Lớp học hằng ngày', sections:[
    { key:'A', name:'Nghe', skill:'LISTENING (NGHE)', type:'listen',
      intro:'Bấm <b>▶ Phát audio</b> để nghe (có thể nghe lại). Mỗi câu chọn một đáp án. Các câu đầu rất dễ.',
      parts:[
        { title:'Part 1 — Classroom instructions (Câu 1–4)',
          desc:'You will hear four short instructions in class. Choose the correct answer.',
          audio:"Part one. You will hear four short instructions. Number one. Good morning, class. Open your book to page ten. Number two. Children, please sit down and be quiet. Number three. It is time for lunch. Wash your hands, please. Number four. Take out your pencil and a piece of paper.",
          questions:[
            {id:1,q:'1. What page must the children open?',options:['Page 2','Page 10','Page 12','Page 20'],ans:1},
            {id:2,q:'2. What must the children do?',options:['Stand up','Sit down','Run','Sing'],ans:1},
            {id:3,q:'3. What time is it?',options:['Lunch time','Bed time','Story time','Home time'],ans:0},
            {id:4,q:'4. What do the children need?',options:['A book and a bag','A pencil and paper','A ball','A chair'],ans:1},
          ]},
        { title:'Part 2 — A short conversation (Câu 5–7)',
          desc:'Listen to two teachers talking about a meeting.',
          audio:"Part two. Listen to two teachers talking about a meeting. Anh: Hi Mai, what time is the meeting? Mai: At three o'clock, in Room 4. Anh: O K. Do I need to bring anything? Mai: Just a pen and your notebook. Anh: Thanks. See you there.",
          questions:[
            {id:5,q:'5. What time is the meeting?',options:["2 o'clock","3 o'clock","4 o'clock","5 o'clock"],ans:1},
            {id:6,q:'6. Where is the meeting?',options:['Room 2','Room 3','Room 4','Room 5'],ans:2},
            {id:7,q:'7. What should Anh bring?',options:['A book','A pen and a notebook','Lunch','A laptop'],ans:1},
          ]},
        { title:'Part 3 — How does the teacher feel? (Câu 8)',
          desc:'Listen to one teacher. Choose the feeling.',
          audio:"Part three. Listen to one teacher. How does she feel? Today my pupils gave me a flower and said thank you. I was very happy.",
          questions:[ {id:8,q:'8. How does the teacher feel?',options:['Happy','Angry','Tired','Bored'],ans:0} ]},
      ]},
    { key:'B', name:'Đọc', skill:'READING (ĐỌC)', type:'read',
      intro:'Đọc và chọn đáp án đúng. Phần biển báo có đáp án tiếng Việt để dễ hiểu.',
      parts:[
        { title:'Part 1 — Signs (Câu 9–11)', desc:'Đọc biển báo và chọn nghĩa đúng.',
          questions:[
            {id:9,context:'EXIT',q:'9. Biển báo này nghĩa là gì?',options:['Lối ra','Nhà vệ sinh','Căng tin','Lớp học'],ans:0},
            {id:10,context:'TOILET',q:'10. Biển báo này chỉ nơi nào?',options:['Nhà vệ sinh','Lối ra','Sân chơi','Văn phòng'],ans:0},
            {id:11,context:'BE QUIET — LIBRARY',q:'11. Trong thư viện, em phải…',options:['Giữ im lặng','Chạy nhanh','Ăn uống','Hát to'],ans:0},
          ]},
        { title:'Part 2 — Read about a pupil (Câu 12–14)', desc:'Read the short text and choose the correct answer.',
          passage:"This is Nam. He is seven years old. He is in Class 2. He likes drawing and football. His teacher is Ms. Lan.",
          questions:[
            {id:12,q:'12. How old is Nam?',options:['Two','Five','Seven','Ten'],ans:2},
            {id:13,q:'13. What class is Nam in?',options:['Class 1','Class 2','Class 3','Class 7'],ans:1},
            {id:14,q:'14. Who is his teacher?',options:['Ms. Lan','Ms. Mai','Mr. Nam','Ms. Hoa'],ans:0},
          ]},
      ]},
    { key:'C', name:'Use of English', skill:'USE OF ENGLISH', type:'read',
      intro:'Choose the best answer (A, B, C or D). Các câu đầu rất dễ.',
      parts:[ { title:'Use of English (Câu 15–20)', desc:'', questions:[
            {id:15,q:'15. I ____ a teacher.',options:['am','is','are','be'],ans:0},
            {id:16,q:'16. She ____ in a primary school.',options:['work','works','working','worked'],ans:1},
            {id:17,q:'17. The children ____ happy today.',options:['is','am','are','be'],ans:2},
            {id:18,q:'18. There are ____ pupils in my class.',options:['much','many','a','any'],ans:1},
            {id:19,q:'19. We go to school ____ Monday.',options:['in','at','on','to'],ans:2},
            {id:20,q:'20. Please ____ quiet in the library.',options:['be','is','are','being'],ans:0},
      ]} ]},
    { key:'D', name:'Viết', skill:'WRITING (VIẾT)', type:'write',
      intro:'Viết một tin nhắn ngắn bằng tiếng Anh. Viết câu đơn giản, đúng là được.',
      tasks:[ {id:'w1',title:'Viết tin nhắn (khoảng 30–40 từ)',min:25,
         prompt:'Write a short message to the parents of your class.<br>Tell them: – tomorrow is a holiday, so there is no school; – wish them a happy day.'} ]},
    { key:'E', name:'Nói', skill:'SPEAKING (NÓI)', type:'speak',
      intro:'Bấm <b>▶ Bắt đầu</b> để nói. Nói câu đơn giản, rõ ràng.',
      tasks:[
        {id:'s1',title:'Part 1 — Về bản thân (làm quen)',prep:10,speak:45,
         prompt:'Answer about yourself: What is your name? Which school do you work at? What class do you teach? Do you like your job?'},
        {id:'s2',title:'Part 2 — Nói về trường của bạn',prep:30,speak:60,
         prompt:'<b>Talk about your school.</b> You can say: – the name of your school; – how many classes it has; – one thing you like about it.'},
      ]},
  ]},
  /* ---------------------- ĐỀ 2 ---------------------- */
  { id:'de2', name:'Đề 2 — Gia đình & thời khoá biểu', sections:[
    { key:'A', name:'Nghe', skill:'LISTENING (NGHE)', type:'listen',
      intro:'Bấm <b>▶ Phát audio</b> để nghe. Mỗi câu chọn một đáp án.',
      parts:[
        { title:'Part 1 — Colours and numbers (Câu 1–4)', desc:'Listen to four short instructions.',
          audio:"Part one. Number one. Take the red book, please. Number two. Count from one to five. Number three. Draw a big yellow sun. Number four. Give me three pencils.",
          questions:[
            {id:1,q:'1. Which book must you take?',options:['Red','Blue','Green','Black'],ans:0},
            {id:2,q:'2. Count from one to ____ .',options:['Three','Four','Five','Ten'],ans:2},
            {id:3,q:'3. What colour is the sun?',options:['Red','Yellow','Blue','Green'],ans:1},
            {id:4,q:'4. How many pencils?',options:['Two','Three','Four','Five'],ans:1},
          ]},
        { title:'Part 2 — The timetable (Câu 5–7)', desc:'Listen to two pupils talking.',
          audio:"Part two. Mai: What do we have on Monday? Nam: We have Maths and English. Mai: What time does English start? Nam: At nine o'clock. Mai: Great, I like English.",
          questions:[
            {id:5,q:'5. What subjects do they have on Monday?',options:['Maths and Art','Maths and English','English and Music','Science and English'],ans:1},
            {id:6,q:'6. What time does English start?',options:['Eight','Nine','Ten','Eleven'],ans:1},
            {id:7,q:'7. What does Mai like?',options:['Maths','Music','English','Art'],ans:2},
          ]},
        { title:'Part 3 — A feeling (Câu 8)', desc:'Listen and choose the feeling.',
          audio:"Part three. Today is my birthday. My friends sang a song for me. I feel excited.",
          questions:[ {id:8,q:'8. How does the speaker feel?',options:['Excited','Sad','Angry','Tired'],ans:0} ]},
      ]},
    { key:'B', name:'Đọc', skill:'READING (ĐỌC)', type:'read', intro:'Đọc và chọn đáp án đúng.',
      parts:[
        { title:'Part 1 — Signs (Câu 9–11)', desc:'Đọc biển báo và chọn nghĩa đúng.',
          questions:[
            {id:9,context:'NO RUNNING',q:'9. Biển báo này nghĩa là gì?',options:['Không chạy','Không nói','Không ăn','Không vẽ'],ans:0},
            {id:10,context:'CANTEEN',q:'10. Biển báo này chỉ nơi nào?',options:['Căng tin','Thư viện','Sân chơi','Lối ra'],ans:0},
            {id:11,context:'WASH YOUR HANDS',q:'11. Biển báo này yêu cầu em…',options:['Rửa tay','Đánh răng','Lau bàn','Mở cửa'],ans:0},
          ]},
        { title:'Part 2 — My family (Câu 12–14)', desc:'Read and choose the correct answer.',
          passage:"This is my family. My father is a doctor. My mother is a teacher. I have one sister. We have a small dog.",
          questions:[
            {id:12,q:'12. What is the father?',options:['A teacher','A doctor','A farmer','A driver'],ans:1},
            {id:13,q:'13. How many sisters does the speaker have?',options:['One','Two','Three','None'],ans:0},
            {id:14,q:'14. What pet do they have?',options:['A cat','A dog','A bird','A fish'],ans:1},
          ]},
      ]},
    { key:'C', name:'Use of English', skill:'USE OF ENGLISH', type:'read', intro:'Choose the best answer (A, B, C or D).',
      parts:[ { title:'Use of English (Câu 15–20)', desc:'', questions:[
            {id:15,q:'15. This is ____ apple.',options:['a','an','the','some'],ans:1},
            {id:16,q:'16. I have two ____ .',options:['book','books','bookes','a book'],ans:1},
            {id:17,q:'17. She ____ to school every day.',options:['go','goes','going','went'],ans:1},
            {id:18,q:'18. ____ you like milk?',options:['Do','Does','Is','Are'],ans:0},
            {id:19,q:'19. The cat is ____ the table.',options:['on','in','at','of'],ans:0},
            {id:20,q:'20. He ____ tall.',options:['am','is','are','be'],ans:1},
      ]} ]},
    { key:'D', name:'Viết', skill:'WRITING (VIẾT)', type:'write', intro:'Viết một tin nhắn ngắn bằng tiếng Anh.',
      tasks:[ {id:'w1',title:'Viết tin nhắn (khoảng 30–40 từ)',min:25,
         prompt:'Write a short message to a friend to invite him/her to your birthday party.<br>Tell: – the day; – the time; – the place.'} ]},
    { key:'E', name:'Nói', skill:'SPEAKING (NÓI)', type:'speak', intro:'Bấm <b>▶ Bắt đầu</b> để nói.',
      tasks:[
        {id:'s1',title:'Part 1 — Về gia đình',prep:10,speak:45,
         prompt:'Answer about your family: How many people are in your family? Who are they? What does your mother or father do?'},
        {id:'s2',title:'Part 2 — Môn học yêu thích',prep:30,speak:60,
         prompt:'<b>Talk about your favourite subject.</b> You can say: – its name; – why you like it; – one thing you do in that lesson.'},
      ]},
  ]},
  /* ---------------------- ĐỀ 3 ---------------------- */
  { id:'de3', name:'Đề 3 — Thời tiết, con vật & món ăn', sections:[
    { key:'A', name:'Nghe', skill:'LISTENING (NGHE)', type:'listen', intro:'Bấm <b>▶ Phát audio</b> để nghe.',
      parts:[
        { title:'Part 1 — Classroom actions (Câu 1–4)', desc:'Listen to four short instructions.',
          audio:"Part one. Number one. Point to the window. Number two. Close the door, please. Number three. Show me your blue pen. Number four. Clap your hands three times.",
          questions:[
            {id:1,q:'1. What must you point to first?',options:['The door','The window','The board','The chair'],ans:1},
            {id:2,q:'2. What must you close?',options:['The window','The door','The book','The bag'],ans:1},
            {id:3,q:'3. What colour is the pen?',options:['Red','Blue','Green','Black'],ans:1},
            {id:4,q:'4. How many times must you clap?',options:['Two','Three','Four','Five'],ans:1},
          ]},
        { title:'Part 2 — The weather (Câu 5–7)', desc:'Listen to two children talking.',
          audio:"Part two. Mai: What's the weather like today? Nam: It's sunny and warm. Mai: Great, let's play outside. Nam: O K, but bring your hat.",
          questions:[
            {id:5,q:'5. What is the weather like?',options:['Rainy','Sunny and warm','Cold','Windy'],ans:1},
            {id:6,q:'6. Where do they want to play?',options:['Inside','Outside','At home','In class'],ans:1},
            {id:7,q:'7. What should Mai bring?',options:['An umbrella','A hat','A coat','A ball'],ans:1},
          ]},
        { title:'Part 3 — A feeling (Câu 8)', desc:'Listen and choose the feeling.',
          audio:"Part three. I lost my favourite pencil today. I feel sad.",
          questions:[ {id:8,q:'8. How does the speaker feel?',options:['Happy','Sad','Excited','Angry'],ans:1} ]},
      ]},
    { key:'B', name:'Đọc', skill:'READING (ĐỌC)', type:'read', intro:'Đọc và chọn đáp án đúng.',
      parts:[
        { title:'Part 1 — Signs (Câu 9–11)', desc:'Đọc biển báo và chọn nghĩa đúng.',
          questions:[
            {id:9,context:'PUSH',q:'9. Biển báo này nghĩa là gì?',options:['Đẩy','Kéo','Dừng','Đi'],ans:0},
            {id:10,context:'PLAYGROUND',q:'10. Biển báo này chỉ nơi nào?',options:['Sân chơi','Lớp học','Bếp ăn','Thư viện'],ans:0},
            {id:11,context:'KEEP CLEAN',q:'11. Biển báo này nhắc em…',options:['Giữ sạch sẽ','Chạy nhanh','Nói to','Ăn uống'],ans:0},
          ]},
        { title:'Part 2 — My pet (Câu 12–14)', desc:'Read and choose the correct answer.',
          passage:"I have a cat. Its name is Mimi. It is white and small. Mimi likes milk and fish. I love my cat.",
          questions:[
            {id:12,q:'12. What pet does the speaker have?',options:['A dog','A cat','A bird','A rabbit'],ans:1},
            {id:13,q:'13. What colour is Mimi?',options:['Black','White','Brown','Grey'],ans:1},
            {id:14,q:'14. What does Mimi like?',options:['Rice','Milk and fish','Bread','Meat'],ans:1},
          ]},
      ]},
    { key:'C', name:'Use of English', skill:'USE OF ENGLISH', type:'read', intro:'Choose the best answer (A, B, C or D).',
      parts:[ { title:'Use of English (Câu 15–20)', desc:'', questions:[
            {id:15,q:'15. I have ____ orange.',options:['a','an','the','two'],ans:1},
            {id:16,q:'16. They ____ students.',options:['am','is','are','be'],ans:2},
            {id:17,q:'17. ____ is your name?',options:['What','Where','When','Who'],ans:0},
            {id:18,q:'18. She has two ____ .',options:['cat','cats','cates','a cat'],ans:1},
            {id:19,q:'19. We ____ TV in the evening.',options:['watch','watches','watching','watched'],ans:0},
            {id:20,q:'20. The book is ____ the bag.',options:['in','on','at','of'],ans:0},
      ]} ]},
    { key:'D', name:'Viết', skill:'WRITING (VIẾT)', type:'write', intro:'Viết một tin nhắn ngắn bằng tiếng Anh.',
      tasks:[ {id:'w1',title:'Viết tin nhắn (khoảng 30–40 từ)',min:25,
         prompt:'Write a short message to your teacher.<br>Tell: – you are sick today; – you cannot come to school; – say sorry.'} ]},
    { key:'E', name:'Nói', skill:'SPEAKING (NÓI)', type:'speak', intro:'Bấm <b>▶ Bắt đầu</b> để nói.',
      tasks:[
        {id:'s1',title:'Part 1 — Một ngày của bạn',prep:10,speak:45,
         prompt:'Answer about your day: What time do you get up? What do you eat for breakfast? How do you go to school?'},
        {id:'s2',title:'Part 2 — Con vật yêu thích',prep:30,speak:60,
         prompt:'<b>Talk about your favourite animal.</b> You can say: – what it is; – what it looks like; – why you like it.'},
      ]},
  ]},
  ]
},

/* =====================================================================
   =============================== THCS (B1) ===========================
   ===================================================================== */
thcs: {
  code:'thcs', label:'THCS', bac:'Bậc 3 (B1)', minutes:40,
  des:[
  /* ---------------------- ĐỀ 1 ---------------------- */
  { id:'de1', name:'Đề 1 — Trường học & hoạt động', sections:[
    { key:'A', name:'Nghe', skill:'LISTENING (NGHE)', type:'listen',
      intro:'Bấm <b>▶ Phát audio</b> để nghe. Nội dung dài và nhanh hơn cấp Tiểu học.',
      parts:[
        { title:'Part 1 — A school announcement (Câu 1–3)', desc:'Listen to an announcement for teachers.',
          audio:"Good morning, everyone. This is an announcement for all teachers. The English club meeting will be held on Friday afternoon at four o'clock in Room two oh five. Please bring your lesson plans. The meeting will last about one hour.",
          questions:[
            {id:1,q:'1. When is the meeting?',options:['Monday morning','Friday afternoon','Friday morning','Thursday afternoon'],ans:1},
            {id:2,q:'2. Where is the meeting?',options:['Room 200','Room 205','Room 250','Room 105'],ans:1},
            {id:3,q:'3. What should teachers bring?',options:['Textbooks','Lesson plans','Laptops','Notebooks'],ans:1},
          ]},
        { title:'Part 2 — Planning a school trip (Câu 4–6)', desc:'Listen to two teachers talking about a trip.',
          audio:"Lan: Hi Minh, are we still going on the school trip next week? Minh: Yes, we're taking the students to the science museum on Wednesday. Lan: Great. How will we get there? Minh: By bus. It leaves at eight, so tell the students to arrive by half past seven. Lan: O K. How much does it cost? Minh: It's free for students this year.",
          questions:[
            {id:4,q:'4. Where are they taking the students?',options:['History museum','Science museum','Art gallery','Zoo'],ans:1},
            {id:5,q:'5. What time should students arrive?',options:['7:00','7:30','8:00','8:30'],ans:1},
            {id:6,q:'6. How much does the trip cost for students?',options:['Free','Ten dollars','Five dollars','Twenty dollars'],ans:0},
          ]},
        { title:'Part 3 — A teacher’s opinion (Câu 7–8)', desc:'Listen to a teacher talking about group work.',
          audio:"I think group work is very useful in my classes. When students work together, they speak more English and they are not afraid of making mistakes. However, I always give clear instructions first.",
          questions:[
            {id:7,q:'7. What does the teacher think about group work?',options:['Useful','Boring','Difficult','Noisy'],ans:0},
            {id:8,q:'8. What does the teacher always do first?',options:['Gives homework','Gives clear instructions','Tests the students','Divides the class'],ans:1},
          ]},
      ]},
    { key:'B', name:'Đọc', skill:'READING (ĐỌC)', type:'read', intro:'Đọc kỹ và chọn đáp án đúng nhất.',
      parts:[
        { title:'Part 1 — A notice (Câu 9–11)', desc:'Read the notice and answer.',
          passage:"NOTICE: The school library will be closed from 12th to 14th May for the installation of new computers. During this time, books can be returned to the office. The library will reopen on 15th May.",
          questions:[
            {id:9,q:'9. Why will the library close?',options:['To install new computers','To clean it','For the holidays','To paint it'],ans:0},
            {id:10,q:'10. Where can books be returned during the closure?',options:['The office','The library','The classroom','Nowhere'],ans:0},
            {id:11,q:'11. When does the library reopen?',options:['12th May','14th May','15th May','16th May'],ans:2},
          ]},
        { title:'Part 2 — Online learning (Câu 12–14)', desc:'Read the article and answer.',
          passage:"Online learning has become popular in many schools. It allows students to study at home and to review lessons whenever they want. However, some students find it hard to stay focused without a teacher nearby. Teachers say that a mix of online and classroom learning often works best.",
          questions:[
            {id:12,q:'12. What advantage of online learning is mentioned?',options:['Students can review lessons anytime','It is cheaper','It is faster','There is no homework'],ans:0},
            {id:13,q:'13. What problem do some students have?',options:['Staying focused','Finding computers','Reading books','Speaking English'],ans:0},
            {id:14,q:'14. What do teachers think works best?',options:['Only online learning','Only classroom learning','A mix of both','No learning at all'],ans:2},
          ]},
      ]},
    { key:'C', name:'Use of English', skill:'USE OF ENGLISH', type:'read', intro:'Choose the best answer (A, B, C or D).',
      parts:[ { title:'Use of English (Câu 15–20)', desc:'', questions:[
            {id:15,q:'15. I ____ English for five years.',options:['learn','have learned','am learning','learned'],ans:1},
            {id:16,q:'16. If it ____ tomorrow, we will cancel the trip.',options:['rains','will rain','rained','raining'],ans:0},
            {id:17,q:'17. This book is ____ than that one.',options:['interesting','more interesting','most interesting','interestingest'],ans:1},
            {id:18,q:'18. The homework ____ by the students every day.',options:['do','does','is done','is doing'],ans:2},
            {id:19,q:'19. The teacher ____ helped me is Ms. Lan.',options:['which','who','where','whose'],ans:1},
            {id:20,q:'20. We had to ____ the meeting because of the storm.',options:['put off','put on','put up','put down'],ans:0},
      ]} ]},
    { key:'D', name:'Viết', skill:'WRITING (VIẾT)', type:'write', intro:'Viết một email ngắn bằng tiếng Anh, dùng câu rõ ràng, đúng ngữ pháp.',
      tasks:[ {id:'w1',title:'Viết email (khoảng 60–80 từ)',min:50,
         prompt:'Write an email to a colleague suggesting that you start an English club for students.<br>Include: – when the club should meet; – one activity for the students; – why it would be useful.'} ]},
    { key:'E', name:'Nói', skill:'SPEAKING (NÓI)', type:'speak', intro:'Bấm <b>▶ Bắt đầu</b> để nói. Trả lời thành câu đầy đủ.',
      tasks:[
        {id:'s1',title:'Part 1 — Về công việc giảng dạy',prep:15,speak:50,
         prompt:'Talk about your teaching: What subject and level do you teach? How long have you been teaching? What do you enjoy most about your job?'},
        {id:'s2',title:'Part 2 — Một tiết học đáng nhớ',prep:30,speak:70,
         prompt:'<b>Talk about a memorable lesson you taught.</b> Say: – what the lesson was about; – why it was memorable; – what your students learned.'},
      ]},
  ]},
  /* ---------------------- ĐỀ 2 ---------------------- */
  { id:'de2', name:'Đề 2 — Công nghệ, sức khoẻ & sở thích', sections:[
    { key:'A', name:'Nghe', skill:'LISTENING (NGHE)', type:'listen', intro:'Bấm <b>▶ Phát audio</b> để nghe.',
      parts:[
        { title:'Part 1 — A test announcement (Câu 1–3)', desc:'Listen to an announcement for students.',
          audio:"Attention, students. The mid-term English test will take place next Tuesday at ten o'clock in the main hall. The test lasts ninety minutes. Remember to bring a pen and your student card.",
          questions:[
            {id:1,q:'1. When is the test?',options:['Next Monday','Next Tuesday','Next Wednesday','Today'],ans:1},
            {id:2,q:'2. How long is the test?',options:['60 minutes','90 minutes','45 minutes','120 minutes'],ans:1},
            {id:3,q:'3. What must students bring?',options:['A laptop','A pen and student card','A dictionary','A calculator'],ans:1},
          ]},
        { title:'Part 2 — Talking about hobbies (Câu 4–6)', desc:'Listen to two friends talking.',
          audio:"Tom: What do you do in your free time, Lan? Lan: I usually read books and go swimming. Tom: How often do you swim? Lan: Twice a week, on Tuesdays and Saturdays.",
          questions:[
            {id:4,q:'4. What does Lan do in her free time?',options:['Paint and run','Read books and swim','Cook and sing','Dance'],ans:1},
            {id:5,q:'5. How often does she swim?',options:['Once a week','Twice a week','Three times a week','Every day'],ans:1},
            {id:6,q:'6. Which days does she swim?',options:['Monday and Friday','Tuesday and Saturday','Wednesday and Sunday','Saturday and Sunday'],ans:1},
          ]},
        { title:'Part 3 — Opinion on smartphones (Câu 7–8)', desc:'Listen to a teacher.',
          audio:"I think smartphones can be useful for learning, but students should not use them during lessons because they get distracted easily.",
          questions:[
            {id:7,q:'7. What does the speaker think smartphones can be?',options:['Useful for learning','Always harmful','Too expensive','Boring'],ans:0},
            {id:8,q:'8. When should students not use them?',options:['At home','During lessons','At night','Never'],ans:1},
          ]},
      ]},
    { key:'B', name:'Đọc', skill:'READING (ĐỌC)', type:'read', intro:'Đọc và chọn đáp án đúng nhất.',
      parts:[
        { title:'Part 1 — A club notice (Câu 9–11)', desc:'Read the notice and answer.',
          passage:"ENVIRONMENT CLUB: Join us every Friday after school to help keep our school green. Activities include planting trees and recycling. No experience needed. Meet at the school garden at 3 p.m.",
          questions:[
            {id:9,q:'9. When does the club meet?',options:['Monday morning','Friday after school','Sunday morning','Every day'],ans:1},
            {id:10,q:'10. What is one activity?',options:['Cooking','Planting trees','Painting','Dancing'],ans:1},
            {id:11,q:'11. Where do they meet?',options:['The library','The school garden','The gym','The office'],ans:1},
          ]},
        { title:'Part 2 — Healthy habits (Câu 12–14)', desc:'Read the article and answer.',
          passage:"Getting enough sleep is essential for students. Research shows that teenagers who sleep at least eight hours do better at school. Eating breakfast and drinking water also help students stay focused during the day.",
          questions:[
            {id:12,q:'12. How many hours should teenagers sleep?',options:['Six','Seven','At least eight','Ten'],ans:2},
            {id:13,q:'13. What helps students stay focused?',options:['Skipping meals','Eating breakfast and drinking water','Sleeping less','More homework'],ans:1},
            {id:14,q:'14. What does research show about good sleepers?',options:['They do better at school','They sleep in class','They eat more','They study less'],ans:0},
          ]},
      ]},
    { key:'C', name:'Use of English', skill:'USE OF ENGLISH', type:'read', intro:'Choose the best answer (A, B, C or D).',
      parts:[ { title:'Use of English (Câu 15–20)', desc:'', questions:[
            {id:15,q:'15. She has lived here ____ 2010.',options:['since','for','in','at'],ans:0},
            {id:16,q:'16. If I were you, I ____ see a doctor.',options:['will','would','can','must'],ans:1},
            {id:17,q:'17. This is the most ____ film I have ever seen.',options:['excite','exciting','excited','excitement'],ans:1},
            {id:18,q:'18. The letter ____ yesterday.',options:['was sent','sent','is sent','sends'],ans:0},
            {id:19,q:'19. I look forward to ____ from you.',options:['hear','hearing','heard','hears'],ans:1},
            {id:20,q:'20. She asked me where I ____ .',options:['live','lived','living','will live'],ans:1},
      ]} ]},
    { key:'D', name:'Viết', skill:'WRITING (VIẾT)', type:'write', intro:'Viết một email ngắn bằng tiếng Anh.',
      tasks:[ {id:'w1',title:'Viết email (khoảng 60–80 từ)',min:50,
         prompt:'Write an email to a friend recommending a book or a film.<br>Include: – the title; – what it is about; – why you recommend it.'} ]},
    { key:'E', name:'Nói', skill:'SPEAKING (NÓI)', type:'speak', intro:'Bấm <b>▶ Bắt đầu</b> để nói.',
      tasks:[
        {id:'s1',title:'Part 1 — Hoạt động lúc rảnh',prep:15,speak:50,
         prompt:'Talk about your free-time activities: What do you do in your free time? How often? Why do you enjoy it?'},
        {id:'s2',title:'Part 2 — Nơi bạn muốn đến',prep:30,speak:70,
         prompt:'<b>Talk about a place you would like to visit.</b> Say: – where it is; – why you want to go there; – what you would do there.'},
      ]},
  ]},
  /* ---------------------- ĐỀ 3 ---------------------- */
  { id:'de3', name:'Đề 3 — Du lịch, nghề nghiệp & lễ hội', sections:[
    { key:'A', name:'Nghe', skill:'LISTENING (NGHE)', type:'listen', intro:'Bấm <b>▶ Phát audio</b> để nghe.',
      parts:[
        { title:'Part 1 — Sports day announcement (Câu 1–3)', desc:'Listen to an announcement.',
          audio:"Good morning. The school sports day will be held next Saturday on the football field. Events start at eight in the morning. Students should wear sports clothes and bring water.",
          questions:[
            {id:1,q:'1. When is the sports day?',options:['Next Sunday','Next Saturday','This Friday','Today'],ans:1},
            {id:2,q:'2. Where will it take place?',options:['The gym','The football field','The main hall','The library'],ans:1},
            {id:3,q:'3. What should students bring?',options:['Books','Water','Laptops','Money'],ans:1},
          ]},
        { title:'Part 2 — Summer plans (Câu 4–6)', desc:'Listen to two students talking.',
          audio:"Hoa: What are you doing this summer? Tuan: I'm going to volunteer at the library. Hoa: That sounds great. How long? Tuan: For two months, in July and August.",
          questions:[
            {id:4,q:'4. What will Tuan do this summer?',options:['Travel abroad','Volunteer at the library','Work in a shop','Just study'],ans:1},
            {id:5,q:'5. How long will he do it?',options:['One month','Two months','Three weeks','A year'],ans:1},
            {id:6,q:'6. Which months?',options:['June and July','July and August','May and June','August and September'],ans:1},
          ]},
        { title:'Part 3 — Opinion on reading (Câu 7–8)', desc:'Listen to a teacher.',
          audio:"I believe reading every day improves vocabulary and concentration. Even fifteen minutes a day can make a big difference over time.",
          questions:[
            {id:7,q:'7. What does reading improve?',options:['Vocabulary and concentration','Only speed','Handwriting','Maths'],ans:0},
            {id:8,q:'8. How much time can make a difference?',options:['Two hours','Fifteen minutes a day','One minute','None'],ans:1},
          ]},
      ]},
    { key:'B', name:'Đọc', skill:'READING (ĐỌC)', type:'read', intro:'Đọc và chọn đáp án đúng nhất.',
      parts:[
        { title:'Part 1 — A lost & found notice (Câu 9–11)', desc:'Read the notice and answer.',
          passage:"LOST: A black umbrella was left in Room 12 on Monday. If it is yours, please collect it from the reception desk before Friday. After Friday, items will be given to charity.",
          questions:[
            {id:9,q:'9. What was lost?',options:['A black umbrella','A bag','A phone','Some keys'],ans:0},
            {id:10,q:'10. Where can it be collected?',options:['Room 12','The reception desk','The library','The office'],ans:1},
            {id:11,q:'11. What happens after Friday?',options:['It is thrown away','It is given to charity','It is kept forever','It is sold'],ans:1},
          ]},
        { title:'Part 2 — A festival (Câu 12–14)', desc:'Read the article and answer.',
          passage:"Tet is the most important festival in Vietnam. Families clean their houses, prepare special food, and visit relatives. Children often receive lucky money in red envelopes.",
          questions:[
            {id:12,q:'12. What is Tet?',options:['A sport','The most important festival in Vietnam','A school','A city'],ans:1},
            {id:13,q:'13. What do families prepare?',options:['Homework','Special food','Uniforms','Tickets'],ans:1},
            {id:14,q:'14. What do children often receive?',options:['Books','Lucky money','Toys','Sweets'],ans:1},
          ]},
      ]},
    { key:'C', name:'Use of English', skill:'USE OF ENGLISH', type:'read', intro:'Choose the best answer (A, B, C or D).',
      parts:[ { title:'Use of English (Câu 15–20)', desc:'', questions:[
            {id:15,q:'15. I have never ____ to Japan.',options:['be','been','being','was'],ans:1},
            {id:16,q:'16. She ____ TV when the phone rang.',options:['watched','was watching','watches','watch'],ans:1},
            {id:17,q:'17. This is ____ interesting book.',options:['a','an','the','some'],ans:1},
            {id:18,q:'18. If you heat ice, it ____ .',options:['melt','melts','melted','will melted'],ans:1},
            {id:19,q:'19. The room ____ cleaned every morning.',options:['is','are','be','being'],ans:0},
            {id:20,q:'20. He is the man ____ car was stolen.',options:['who','which','whose','where'],ans:2},
      ]} ]},
    { key:'D', name:'Viết', skill:'WRITING (VIẾT)', type:'write', intro:'Viết một email ngắn bằng tiếng Anh.',
      tasks:[ {id:'w1',title:'Viết email (khoảng 60–80 từ)',min:50,
         prompt:'Write an email to a friend telling about a festival or holiday in your area.<br>Include: – its name; – what people do; – what you like about it.'} ]},
    { key:'E', name:'Nói', skill:'SPEAKING (NÓI)', type:'speak', intro:'Bấm <b>▶ Bắt đầu</b> để nói.',
      tasks:[
        {id:'s1',title:'Part 1 — Một nghề thú vị',prep:15,speak:50,
         prompt:'Talk about a job you find interesting: What is it? Why do you find it interesting? What skills does it need?'},
        {id:'s2',title:'Part 2 — Một chuyến đi',prep:30,speak:70,
         prompt:'<b>Talk about a trip you took or want to take.</b> Say: – where; – who with; – what you did or would do.'},
      ]},
  ]},
  ]
},

/* =====================================================================
   =============================== THPT (B2) ===========================
   ===================================================================== */
thpt: {
  code:'thpt', label:'THPT', bac:'Bậc 4 (B2)', minutes:45,
  des:[
  /* ---------------------- ĐỀ 1 ---------------------- */
  { id:'de1', name:'Đề 1 — Dạy học & đánh giá', sections:[
    { key:'A', name:'Nghe', skill:'LISTENING (NGHE)', type:'listen', intro:'Bấm <b>▶ Phát audio</b> để nghe. Nội dung học thuật, tốc độ tự nhiên.',
      parts:[
        { title:'Part 1 — A short lecture (Câu 1–3)', desc:'Listen to part of a talk on language learning.',
          audio:"Today I'd like to talk about how we acquire a second language. Research suggests that learners need a large amount of comprehensible input, that is, language they can mostly understand. Speaking fluently usually develops later, after a so-called silent period. Therefore, teachers should not force beginners to speak too early.",
          questions:[
            {id:1,q:'1. According to the speaker, what do learners need a lot of?',options:['Grammar rules','Comprehensible input','Vocabulary tests','Translation'],ans:1},
            {id:2,q:'2. When does fluent speaking usually develop?',options:['Immediately','After a silent period','Before listening','It never develops'],ans:1},
            {id:3,q:'3. What does the speaker advise teachers to do?',options:['Force students to speak early','Not force beginners to speak too early','Avoid listening tasks','Teach only grammar'],ans:1},
          ]},
        { title:'Part 2 — A discussion (Câu 4–6)', desc:'Listen to two colleagues discussing tests.',
          audio:"Anna: I'm not sure standardized tests really measure language ability. Ben: I agree to some extent, but they're practical for large numbers of students. Anna: True, though they often ignore speaking skills. Ben: Exactly. That's why I'd combine them with oral interviews.",
          questions:[
            {id:4,q:'4. What is Anna’s main concern about standardized tests?',options:['They are expensive','They may not measure ability well','They take too long','They are too easy'],ans:1},
            {id:5,q:'5. Why does Ben partly support them?',options:['They are practical for many students','They are fun','They test speaking','They are free'],ans:0},
            {id:6,q:'6. What does Ben suggest adding?',options:['More writing','Oral interviews','Homework','Group work'],ans:1},
          ]},
        { title:'Part 3 — A teacher’s view (Câu 7–8)', desc:'Listen to a teacher talking about motivation.',
          audio:"In my experience, giving students choice in their assignments increases motivation dramatically. When they can choose a topic they care about, the quality of their work improves, even if the task is challenging.",
          questions:[
            {id:7,q:'7. What increases motivation, according to the speaker?',options:['Giving students choice','Giving more tests','Reducing the workload','Strict rules'],ans:0},
            {id:8,q:'8. What happens to the quality of the work?',options:['It improves','It falls','It stays the same','It is not mentioned'],ans:0},
          ]},
      ]},
    { key:'B', name:'Đọc', skill:'READING (ĐỌC)', type:'read', intro:'Đọc đoạn văn học thuật và chọn đáp án đúng nhất.',
      parts:[ { title:'Technology in the classroom (Câu 9–12)', desc:'Read the passage and answer.',
          passage:"The integration of technology into classrooms has transformed teaching, but it is not without challenges. While digital tools can make lessons more engaging and provide instant feedback, an over-reliance on screens may reduce face-to-face interaction. Experts argue that technology should support, not replace, good teaching. The most effective educators use digital resources selectively, choosing them only when they add genuine value to learning.",
          questions:[
            {id:9,q:'9. What is one benefit of technology mentioned?',options:['Instant feedback','Lower costs','Less planning','Shorter lessons'],ans:0},
            {id:10,q:'10. What is a possible drawback?',options:['Reduced face-to-face interaction','Higher marks','More reading','Faster typing'],ans:0},
            {id:11,q:'11. What do experts argue technology should do?',options:['Replace teaching','Support teaching','End homework','Test students'],ans:1},
            {id:12,q:'12. How do effective educators use digital resources?',options:['All the time','Selectively','Never','Randomly'],ans:1},
      ]} ]},
    { key:'C', name:'Use of English', skill:'USE OF ENGLISH', type:'read', intro:'Choose the best answer (A, B, C or D). Trình độ B2.',
      parts:[ { title:'Use of English (Câu 13–18)', desc:'', questions:[
            {id:13,q:'13. Not only ____ late, but he also forgot the report.',options:['he was','was he','he is','is he'],ans:1},
            {id:14,q:'14. If I had known about the change, I ____ you.',options:['would tell','would have told','will tell','told'],ans:1},
            {id:15,q:'15. She is used to ____ in front of large classes.',options:['speak','speaking','spoke','speaks'],ans:1},
            {id:16,q:'16. He said he ____ the lesson the day before.',options:['prepares','had prepared','prepare','will prepare'],ans:1},
            {id:17,q:'17. We must ____ a solution to this problem soon.',options:['come up with','come across','come down','come over'],ans:0},
            {id:18,q:'18. ____ the bad weather, the school event went ahead.',options:['Despite','Although','However','Because'],ans:0},
      ]} ]},
    { key:'D', name:'Viết', skill:'WRITING (VIẾT)', type:'write', intro:'Viết một đoạn văn nghị luận ngắn, có quan điểm và lý lẽ rõ ràng.',
      tasks:[ {id:'w1',title:'Viết đoạn văn (khoảng 100–120 từ)',min:80,
         prompt:'Some people believe that technology should be used in every lesson.<br><b>To what extent do you agree?</b> Write a short paragraph giving your opinion and reasons.'} ]},
    { key:'E', name:'Nói', skill:'SPEAKING (NÓI)', type:'speak', intro:'Bấm <b>▶ Bắt đầu</b> để nói. Trình bày mạch lạc, có lập luận.',
      tasks:[
        {id:'s1',title:'Part 1 — Bối cảnh giảng dạy',prep:15,speak:55,
         prompt:'Introduce yourself and your teaching context. What challenges do you face when teaching English at high school?'},
        {id:'s2',title:'Part 2 — Nêu và bảo vệ quan điểm',prep:45,speak:90,
         prompt:'<b>Express and justify your opinion:</b> "Should English exams include a speaking test? Why or why not?" Speak for about one minute, giving at least two reasons.'},
      ]},
  ]},
  /* ---------------------- ĐỀ 2 ---------------------- */
  { id:'de2', name:'Đề 2 — Phản hồi, mạng xã hội & học từ xa', sections:[
    { key:'A', name:'Nghe', skill:'LISTENING (NGHE)', type:'listen', intro:'Bấm <b>▶ Phát audio</b> để nghe.',
      parts:[
        { title:'Part 1 — A lecture on feedback (Câu 1–3)', desc:'Listen to part of a talk.',
          audio:"Effective feedback is one of the most powerful tools in education. Studies indicate that feedback works best when it is specific and timely, focusing on what the learner can improve rather than simply giving a grade.",
          questions:[
            {id:1,q:'1. How is feedback described?',options:['A waste of time','A powerful tool','Just a grade','Optional'],ans:1},
            {id:2,q:'2. Feedback works best when it is ____ .',options:['long','specific and timely','general','delayed'],ans:1},
            {id:3,q:'3. Good feedback focuses on ____ .',options:['the grade only','what the learner can improve','the teacher','nothing'],ans:1},
          ]},
        { title:'Part 2 — Social media at school (Câu 4–6)', desc:'Listen to two colleagues.',
          audio:"Mai: Do you think social media helps students learn? Long: In some ways. They can share resources and ask questions. Mai: But it can also be a huge distraction. Long: True. That's why digital literacy should be taught at school.",
          questions:[
            {id:4,q:'4. What benefit does Long mention?',options:['Playing games','Sharing resources and asking questions','Sleeping','Skipping class'],ans:1},
            {id:5,q:'5. What is Mai’s concern?',options:['It is expensive','It can be a distraction','It is slow','It is banned'],ans:1},
            {id:6,q:'6. What does Long suggest teaching?',options:['Maths','Digital literacy','Cooking','Sports'],ans:1},
          ]},
        { title:'Part 3 — Opinion on exams (Câu 7–8)', desc:'Listen to a teacher.',
          audio:"Personally, I believe continuous assessment gives a fairer picture of a student's ability than a single final exam, which can be heavily affected by nerves on the day.",
          questions:[
            {id:7,q:'7. What does the speaker prefer?',options:['A final exam only','Continuous assessment','No assessment','Oral tests only'],ans:1},
            {id:8,q:'8. What problem with a single final exam is mentioned?',options:['It is too easy','It can be affected by nerves','It is too short','It is too cheap'],ans:1},
          ]},
      ]},
    { key:'B', name:'Đọc', skill:'READING (ĐỌC)', type:'read', intro:'Đọc đoạn văn học thuật và chọn đáp án đúng nhất.',
      parts:[ { title:'Remote learning (Câu 9–12)', desc:'Read the passage and answer.',
          passage:"The rise of remote learning has reshaped expectations in education. Although it offers flexibility and access to a wider range of courses, critics point out that it demands strong self-discipline and can deepen inequalities, since not all learners have reliable internet or a quiet place to study. Consequently, many institutions are adopting blended models that combine the strengths of both online and in-person teaching.",
          questions:[
            {id:9,q:'9. What is one advantage of remote learning?',options:['Less discipline needed','Access to a wider range of courses','No internet needed','Shorter courses'],ans:1},
            {id:10,q:'10. What does remote learning demand?',options:['Strong self-discipline','Expensive equipment','A teacher present','No effort'],ans:0},
            {id:11,q:'11. Why can it deepen inequalities?',options:['It is too easy','Not all learners have reliable internet or quiet space','It is free','It is fun'],ans:1},
            {id:12,q:'12. What are many institutions adopting?',options:['Only online learning','Only in-person learning','Blended models','No teaching'],ans:2},
      ]} ]},
    { key:'C', name:'Use of English', skill:'USE OF ENGLISH', type:'read', intro:'Choose the best answer (A, B, C or D). Trình độ B2.',
      parts:[ { title:'Use of English (Câu 13–18)', desc:'', questions:[
            {id:13,q:'13. Hardly ____ the bell rung when the students left.',options:['had','has','have','did'],ans:0},
            {id:14,q:'14. I would rather you ____ smoke here.',options:["don't","didn't",'not',"won't"],ans:1},
            {id:15,q:'15. The report needs ____ before Friday.',options:['finish','finishing','to finishing','finish it'],ans:1},
            {id:16,q:'16. ____ harder, she would have passed the exam.',options:['Had she studied','She had studied','If she studied','Did she study'],ans:0},
            {id:17,q:'17. His success can be ____ to years of practice.',options:['attributed','contributed','distributed','submitted'],ans:0},
            {id:18,q:'18. Only after the meeting ____ the truth.',options:['I learned','did I learn','I did learn','learned I'],ans:1},
      ]} ]},
    { key:'D', name:'Viết', skill:'WRITING (VIẾT)', type:'write', intro:'Viết một đoạn văn nghị luận ngắn, có quan điểm và lý lẽ rõ ràng.',
      tasks:[ {id:'w1',title:'Viết đoạn văn (khoảng 100–120 từ)',min:80,
         prompt:'Many people argue that social media does more harm than good to young people.<br><b>To what extent do you agree?</b> Write a short paragraph giving your opinion and reasons.'} ]},
    { key:'E', name:'Nói', skill:'SPEAKING (NÓI)', type:'speak', intro:'Bấm <b>▶ Bắt đầu</b> để nói.',
      tasks:[
        {id:'s1',title:'Part 1 — Thách thức trong giáo dục',prep:15,speak:55,
         prompt:'Describe a challenge in modern education and explain how you would address it as a teacher.'},
        {id:'s2',title:'Part 2 — Nêu và bảo vệ quan điểm',prep:45,speak:90,
         prompt:'<b>Express and justify your opinion:</b> "Should schools ban smartphones?" Speak for about one minute, giving at least two reasons.'},
      ]},
  ]},
  /* ---------------------- ĐỀ 3 ---------------------- */
  { id:'de3', name:'Đề 3 — Học tập suốt đời, AI & giáo dục hoà nhập', sections:[
    { key:'A', name:'Nghe', skill:'LISTENING (NGHE)', type:'listen', intro:'Bấm <b>▶ Phát audio</b> để nghe.',
      parts:[
        { title:'Part 1 — Lifelong learning (Câu 1–3)', desc:'Listen to part of a talk.',
          audio:"In the twenty-first century, the ability to keep learning throughout life has become essential. As technology changes rapidly, the skills we learn today may be outdated within a decade, so adaptability matters more than ever.",
          questions:[
            {id:1,q:'1. What has become essential?',options:['Memorising facts','Keep learning throughout life','Avoiding technology','Working less'],ans:1},
            {id:2,q:'2. Why may today’s skills become outdated?',options:['People forget','Technology changes rapidly','Schools close','Exams change'],ans:1},
            {id:3,q:'3. What matters more than ever?',options:['Speed','Adaptability','Strength','Wealth'],ans:1},
          ]},
        { title:'Part 2 — Discussion on AI (Câu 4–6)', desc:'Listen to two colleagues.',
          audio:"Linh: Some teachers worry that AI tools will make students lazy. Phong: I see it differently; used well, they can free up time for deeper thinking. Linh: But students still need to learn the basics first. Phong: Absolutely, AI should be a support, not a substitute.",
          questions:[
            {id:4,q:'4. What do some teachers worry about?',options:['AI is expensive','AI will make students lazy','AI is slow','AI is banned'],ans:1},
            {id:5,q:'5. How does Phong see AI tools?',options:['Useless','They can free up time for deeper thinking','Dangerous','Boring'],ans:1},
            {id:6,q:'6. What do they agree AI should be?',options:['A substitute','A support, not a substitute','Forbidden','The main teacher'],ans:1},
          ]},
        { title:'Part 3 — Opinion on mistakes (Câu 7–8)', desc:'Listen to a teacher.',
          audio:"I always tell my students that mistakes are part of learning. When learners feel safe to make errors, they take more risks with language and progress faster.",
          questions:[
            {id:7,q:'7. What does the speaker say about mistakes?',options:['Avoid them','They are part of learning','They are failures','Hide them'],ans:1},
            {id:8,q:'8. What happens when learners feel safe to make errors?',options:['They stop','They take more risks and progress faster','They get bored','They leave'],ans:1},
          ]},
      ]},
    { key:'B', name:'Đọc', skill:'READING (ĐỌC)', type:'read', intro:'Đọc đoạn văn học thuật và chọn đáp án đúng nhất.',
      parts:[ { title:'Inclusive education (Câu 9–12)', desc:'Read the passage and answer.',
          passage:"Inclusive education aims to ensure that all students, regardless of ability or background, learn together in the same environment. Supporters claim it promotes empathy and prepares children for a diverse society. Nevertheless, it places significant demands on teachers, who must adapt their methods to a wide range of needs, often with limited resources.",
          questions:[
            {id:9,q:'9. What does inclusive education aim to do?',options:['Separate students','Have all students learn together','Test students more','Reduce classes'],ans:1},
            {id:10,q:'10. What is one claimed benefit?',options:['Lower costs','It promotes empathy','Shorter days','Less homework'],ans:1},
            {id:11,q:'11. What demand does it place on teachers?',options:['Teach faster','Adapt methods to a range of needs','Give fewer lessons','Use no technology'],ans:1},
            {id:12,q:'12. What limitation is mentioned?',options:['Too many holidays','Limited resources','Short books','High pay'],ans:1},
      ]} ]},
    { key:'C', name:'Use of English', skill:'USE OF ENGLISH', type:'read', intro:'Choose the best answer (A, B, C or D). Trình độ B2.',
      parts:[ { title:'Use of English (Câu 13–18)', desc:'', questions:[
            {id:13,q:'13. Had it not been for her help, I ____ the deadline.',options:['miss','would miss','would have missed','missed'],ans:2},
            {id:14,q:'14. It is high time we ____ this issue.',options:['address','addressed','addressing','to address'],ans:1},
            {id:15,q:'15. ____ being tired, she finished the marking.',options:['Despite','Although','However','Because'],ans:0},
            {id:16,q:'16. The new policy will ____ effect next month.',options:['take','make','do','get'],ans:0},
            {id:17,q:'17. He denied ____ the email.',options:['to send','sending','send','sent'],ans:1},
            {id:18,q:'18. So complex ____ the problem that no one could solve it.',options:['was','the problem was','it was','had'],ans:0},
      ]} ]},
    { key:'D', name:'Viết', skill:'WRITING (VIẾT)', type:'write', intro:'Viết một đoạn văn nghị luận ngắn, có quan điểm và lý lẽ rõ ràng.',
      tasks:[ {id:'w1',title:'Viết đoạn văn (khoảng 100–120 từ)',min:80,
         prompt:'Some argue that final examinations should be replaced by continuous assessment.<br><b>To what extent do you agree?</b> Write a short paragraph giving your opinion and reasons.'} ]},
    { key:'E', name:'Nói', skill:'SPEAKING (NÓI)', type:'speak', intro:'Bấm <b>▶ Bắt đầu</b> để nói.',
      tasks:[
        {id:'s1',title:'Part 1 — Tạo động lực cho học sinh',prep:15,speak:55,
         prompt:'How do you keep your students motivated? Give examples from your own teaching.'},
        {id:'s2',title:'Part 2 — Nêu và bảo vệ quan điểm',prep:45,speak:90,
         prompt:'<b>Express and justify your opinion:</b> "Will AI replace teachers in the future?" Speak for about one minute, giving at least two reasons.'},
      ]},
  ]},
  ]
},

};
