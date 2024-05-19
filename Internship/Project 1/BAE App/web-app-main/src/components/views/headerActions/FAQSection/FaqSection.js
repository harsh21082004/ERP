import React, { useState } from "react";
import styled from "styled-components";

import theme from "~/styles/theme";
import { mediaQueryMobileOrTablet } from "~/styles/mixins";

const FAQ = () => {
  const faqs = [
    {
      question: `What is BAE?`,
      answer: `BAE is the first dating platform designed specifically for individuals passionate about cryptocurrency. It's a unique space where crypto enthusiasts can meet, connect, and explore relationships with like-minded people, all while enjoying innovative features tailored to their interests.`,
    },
    {
      question: `Who can join BAE?`,
      answer: `Anyone who shares a keen interest in cryptocurrency and is looking for connections that go beyond the surface. Whether you're deeply embedded in the crypto world or just starting out, BAE offers a welcoming community for all crypto believers.`,
    },
    {
      question: `How does the referral program work?`,
      answer: `For every friend you successfully refer to BAE, both you and your friend receive "X" Gold Points. These points can be used within the platform for various benefits, enhancing your BAE experience. Make sure your referral signs up and becomes an active member for the points to be credited.`,
    },
    {
      question: `What are Bae Points, and how do I earn them?`,
      answer: `Bae Points are the currency of our platform, consisting of Social Points and Gold Points. You earn Social Points by engaging with our community on social media, like sharing tweets tagging the BAE account. Gold Points are earned through our referral program. The more you engage, the more points you earn, unlocking special features and benefits.`,
    },
    {
      question: `Can my social media following impact my Bae Points?`,
      answer: `Yes! If you have a high following on Twitter, you can leverage your influence to earn more Social Points. The system is designed to recognize and reward influential members of the crypto community who help spread the word about BAE.`,
    },
    {
      question: `What's next for BAE?`,
      answer: `We're constantly looking to innovate and enhance the BAE experience. Stay tuned for upcoming features, events, and more ways to engage with the crypto dating community.`,
    },
  ];

  const [faqVisible, setFaqVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderFaqs = () => (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div
          className="faq-item"
          key={index}
          style={{
            marginTop: "16px",
            cursor: "pointer",
            fontSize: "1rem",
            padding: "16px",
            borderBottom: "1px solid rgba(255,255,255,0.5)",
          }}
          onClick={() => toggleFAQ(index)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{ display: "flex", fontFamily: theme.fontFamilies.rubik }}
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {faq.question}
            </div>
            <div style={{ display: "flex" }}>
              {activeIndex === index ? "-" : "+"}
            </div>
          </div>
          {activeIndex === index && (
            <div
              style={{
                marginTop: "20px",
                color: "rgba(255,255,255,0.7)",
                fontFamily: theme.fontFamilies.rubik,
              }}
              className={`faq-answer ${
                activeIndex === index ? "show" : "hide"
              }`}
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div
        style={{
          color: "#fff",
          fontFamily: theme.fontFamilies.rubik,
          letterSpacing: "4px",
          backgroundColor: "#3D2481",
          borderRadius: "32px",
          cursor: "pointer",
          padding: "12px 20px",
          display: "flex",
        }}
        onClick={() => setFaqVisible((p) => !p)}
      >
        <img style={{ marginRight: "8px" }} src="/assets/images/question.png" />
        FAQ
      </div>
      {faqVisible && (
        <div
          style={{
            backdropFilter: "blur(5px)",
            position: "fixed",
            inset: 0,
            zIndex: 99,
          }}
        >
          <StyledFaqContainer style={{}}>
            <div
              style={{
                fontFamily: theme.fontFamilies.rubik,
                fontWeight: 600,
                fontSize: "48px",
              }}
            >
              Frequently Asked Questions
            </div>
            {renderFaqs()}
            <div
              onClick={() => setFaqVisible(false)}
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "40px",
                top: "40px",
                border: "2px solid #fff",
                borderRadius: "100px",
                width: "48px",
                height: "48px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/assets/images/cross.svg" />
            </div>
          </StyledFaqContainer>
        </div>
      )}
    </>
  );
};

export default FAQ;

const StyledFaqContainer = styled("div")`
  position: absolute;
  right: 40px;
  top: 40px;
  background-color: #3d2481;
  border: 4px solid #5c3ab9;
  border-radius: 20px;
  width: 800px;
  padding: 32px;
  color: #fff;
  font-size: 1.5rem;
  max-height: 80vh;
  overflow-y: auto;
  padding-top: 80px;

  ${mediaQueryMobileOrTablet} {
    font-size: 4rem;
    line-height: 4rem;
    width: 80vw;
  }
`;
