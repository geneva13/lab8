import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://bulkffxplgttqshuifys.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1bGtmZnhwbGd0dHFzaHVpZnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NzYyMjMsImV4cCI6MjAyNjM1MjIyM30.8zvPt_sRI68lEu5l-_1IllS10bO4xbfWKaXMRcZhqEQ'

const supabase = createClient(supabaseUrl, supabaseKey)

  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
       .select('*')

    for (let book of books) {
      let bookList = document.getElementById('books');
      bookList.innerHTML += `<tr><td>${book.title}</td> <td>${book.Author}</td></tr>`
   }
}

getBooks();