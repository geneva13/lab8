import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://krnsrmjmwjjkiuvefcfl.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtybnNybWptd2pqa2l1dmVmY2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2Mjk2NjIsImV4cCI6MTk5NjIwNTY2Mn0.2o_lN_B7v8jQgGuFXF1eBt55VWRILlhPKHAievmh0iU'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books) {
     let bookList = document.getElementById('books');
     bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.publisher}</td></tr>`;
   }
}

getBooks();