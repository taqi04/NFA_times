import "./style.css";
 import { books } from "../../utils/books";
  import BookCard from "../../components/BookCard";
   import SectionTitle from "../../components/SectionTitle";
    import { motion } from "framer-motion";
    
    export default function Home(){ const popular = books.slice(0,4); return( <> <section className="hero"> <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} className="hero-content" > <h1>Discover Your Next Book</h1> <p>Best online bookstore for students</p> </motion.div> </section> <div className="container"> <SectionTitle title="Popular Books" subtitle="Most popular books this month" /> <div className="grid"> {popular.map(book=>( <BookCard key={book.id} book={book}/> ))} </div> </div> </> ) }