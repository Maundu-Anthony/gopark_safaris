import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is the best time to visit Kenya for a safari?',
      answer: 'The best time for safari in Kenya is during the dry seasons: January-February and June-October. The Great Migration in Maasai Mara is best witnessed from July to October.'
    },
    {
      question: 'Do I need a visa to visit Kenya?',
      answer: 'Most visitors can obtain an e-visa online before traveling. Visit www.evisa.go.ke to apply. Some nationalities may get visa on arrival.'
    },
    {
      question: 'What vaccinations do I need?',
      answer: 'Yellow fever vaccination is required if coming from endemic countries. We recommend malaria prophylaxis and being up-to-date with routine vaccinations. Consult your doctor before travel.'
    },
    {
      question: 'What should I pack for a safari?',
      answer: 'Pack lightweight, neutral-colored clothing, a hat, sunscreen, insect repellent, binoculars, camera with zoom lens, and comfortable walking shoes. Layers are important for early morning game drives.'
    },
    {
      question: 'Is it safe to go on safari in Kenya?',
      answer: 'Yes, safaris in Kenya are very safe. You will be accompanied by experienced guides, and we follow all safety protocols. Wildlife viewing is done from secure vehicles.'
    },
    {
      question: 'What is included in the safari package price?',
      answer: 'Our packages typically include accommodation, meals as specified, game drives, park entrance fees, professional guide, and airport transfers. International flights and personal expenses are not included.'
    },
    {
      question: 'Can you accommodate dietary restrictions?',
      answer: 'Yes, we can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and allergies. Please inform us when booking.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 30+ days before departure receive a full refund minus a 10% processing fee. 15-29 days: 50% refund. Less than 14 days: no refund. We recommend travel insurance.'
    }
  ];

  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-warm-khaki">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-safari-olive mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-sunset-orange mx-auto mb-4"></div>
          <p className="text-dark-leather">
            Everything you need to know about planning your safari adventure
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-safari-olive/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-warm-khaki/30 transition"
              >
                <span className="font-semibold text-safari-olive pr-4">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-sunset-orange transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-warm-khaki/20 border-t border-safari-olive/10">
                  <p className="text-dark-leather">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-dark-leather mb-4">Still have questions?</p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-sunset-orange text-white px-8 py-3 rounded-lg hover:bg-sunset-orange/90 transition font-semibold"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
