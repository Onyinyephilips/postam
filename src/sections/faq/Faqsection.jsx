import Question from "../../components/Question";
import { faqdata } from "../../constants/faq";
import { useState } from "react";



const Faqsection = () => {
    const [showSelectedQ, setShowSelectedQ] = useState(null);

    const showAnswer =(index) =>{
    setShowSelectedQ(index === showSelectedQ ? null : index);
    };


  return (
    // <section className=" w-full lg:w-[800px] m-auto py-20 padding-x">
    //     <div className="space-y-6">
    //         {faqdata.map((d, index) => {
    //             return <Question 
    //                 key={d.id} 
    //                 faqdata={d} 
    //                 onClick={() =>showAnswer(index)} 
    //                 isOpen = {showSelectedQ === index}/>;
    //         })}

    //     </div>
    // </section>
    <section className="w-full lg:w-[800px] m-auto py-20 padding-x">
  <div className="space-y-6">
    {faqdata.map((d, index) => (
      <Question
        key={d.id}
        faqdata={{
          ...d,
          answer: Array.isArray(d.answer)
            ? d.answer.map((para, i) => <p key={i} className="mb-3">{para}</p>)
            : <p>{d.answer}</p>
        }}
        onClick={() => showAnswer(index)}
        isOpen={showSelectedQ === index}
      />
    ))}
  </div>
</section>
  )
}

export default Faqsection