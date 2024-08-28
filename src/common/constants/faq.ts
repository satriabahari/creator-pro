import { FaqProps } from "../types/faq";

const FAQ_ITEMS: FaqProps[] = [
  {
    question: "What is the return policy?",
    answer: "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition.",
    isShow: true,
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping typically takes 3-5 business days, depending on your location.",
    isShow: true,
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary based on the destination.",
  },
  {
    question: "Can I track my order?",
    answer: "Yes, once your order has been shipped, you will receive an email with a tracking number.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    isShow: true,
  },
]

export default FAQ_ITEMS;