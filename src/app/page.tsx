import AuthorCard from "@/components/AuthorCard";
import CommentSection from "@/components/CommentSection";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Mega from "@/components/Mega";
import Navbar from "@/components/Navbar";
import React from "react";


export default function Home() {
  return (
<div>
  <h1></h1>
  <Navbar/>
  <Feature />
  <Mega />
  <CommentSection postId={1}/>
  <AuthorCard />
  <Footer />

</div>
  );
}
