import { internalBlogs } from "./blogs.generated";

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  // internalBlogs is auto-generated from public/blogs/articles/*.xml, see scripts/generate-blog-manifest.js
  blogs: [
    ...internalBlogs,
    {
      url: "https://medium.com/@sandeep15mca/fixed-window-rate-limiter-7-critical-trade-offs-every-software-engineer-should-know-7722d22d26d5",
      title:
        "Fixed Window Rate Limiter: 7 Critical Trade-Offs Every Software Engineer Should Know — Part 1",
      description:
        "Every backend engineer knows what a rate limiter does. Far fewer understand where it breaks.",
      category: "System Design",
      readTime: "6 min read",
    },
    {
      url: "https://medium.com/@sandeep15mca/from-hld-to-code-where-my-school-payment-system-started-falling-apart-36cac9821a1b",
      title:
        "From HLD to Code: Where My School Payment System Started Falling Apart",
      description:
        "Why converting system design to code is harder than you think (School Payment System LLD).",
      category: "System Design",
      readTime: "7 min read",
    },
    {
      url: "https://medium.com/@sandeep15mca/no-one-knows-what-happens-to-it-jobs-next-thats-why-most-developers-are-stuck-48151dd66ff8",
      title:
        "No One Knows What Happens to IT Jobs Next — That's Why Most Developers Are Stuck",
      description:
        "There's a silent anxiety spreading across the developer community right now.",
      category: "Career",
      readTime: "5 min read",
    },
    {
      url: "https://medium.com/@sandeep15mca/designing-a-scalable-school-payment-system-hld-a-real-world-system-design-deep-dive-f0b5c1dff907",
      title:
        "Designing a Scalable School Payment System (HLD) — A Real-World System Design Deep Dive",
      description:
        "Not another e-commerce clone — learn how to design domain-specific payment systems like a senior engineer.",
      category: "System Design",
      readTime: "8 min read",
    },
    {
      url: "https://medium.com/@sandeep15mca/most-engineers-fail-system-design-for-this-one-simple-reason-33650c872371",
      title: "Most Engineers Fail System Design for This One Simple Reason",
      description:
        "Most engineers don't fail system design because they lack knowledge. They fail because they start solving too early.",
      category: "System Design",
      readTime: "5 min read",
    },
    {
      url: "https://medium.com/@sandeep15mca/when-caching-goes-wrong-a-real-world-spring-boot-incident-that-caused-stale-data-memory-leaks-c9fcfe63fcd1",
      title:
        "When Caching Goes Wrong: A Real-World Spring Boot Incident That Caused Stale Data, Memory Leaks…",
      description:
        "Your service is fast. Your metrics look great. Latency drops from 200ms to 20ms — until it doesn't.",
      category: "Java",
      readTime: "6 min read",
    },
    {
      url: "https://medium.com/@sandeep15mca/spring-transactional-trap-why-your-money-might-move-even-when-your-api-fails-b9fd94cbcd43",
      title:
        "Spring @Transactional Trap: Why Your Money Might Move Even When Your API Fails",
      description:
        '"Your API failed… but the money still moved." Sounds impossible? This happens silently in many production systems.',
      category: "Java",
      readTime: "6 min read",
    },
    {
      url: "https://medium.com/@sandeep15mca/stop-logging-passwords-securing-sensitive-fields-in-java-records-with-spring-boot-86dfb9914ff3",
      title:
        "Stop Logging Passwords! Securing Sensitive Fields in Java Records with Spring Boot",
      description:
        "Modern Java development loves immutability, conciseness, and safety — and Java Records deliver exactly that.",
      category: "Java",
      readTime: "5 min read",
    },
    {
      url: "https://medium.com/@sandeep15mca/how-im-building-my-dream-game-while-working-a-9-6-job-6cdfe4bb3f51",
      title: "How I'm Building My Dream Game While Working a 9–6 Job",
      description:
        "Balancing a full-time job and a full-time dream isn't easy, but here's how I'm making it work — one bubble at a time.",
      category: "Game Development",
      readTime: "4 min read",
    },
    {
      url: "https://medium.com/@sandeep15mca/the-array-survival-guide-5-must-know-problems-for-the-night-before-the-interview-926eabd539f7",
      title:
        "The Array Survival Guide: Must-Know Problems for the Night Before the Interview",
      description: "Stressed before your coding interview? Don't be.",
      category: "DSA",
      readTime: "5 min read",
    },
    {
      url: "https://medium.com/@sandeep15mca/java-memory-leaks-and-memory-optimization-39813b54dbcd",
      title: "Java Memory leaks and Memory optimization",
      description: "Introduction of Memory Leaks",
      category: "Java",
      readTime: "6 min read",
    },
    {
      url: "https://medium.com/@sandeep15mca/rest-api-call-in-angular-application-289d907020ff",
      title: "Rest API Call In Angular Application",
      description:
        "In modern web development, it is common to build applications that interact with external data sources through APIs (Application Programming Interfaces). Angular, a powerful and popular front-end framework, provides robust tools and features to seamlessly integrate RESTful APIs into your applications.",
      category: "Angular",
      readTime: "5 min read",
    },
    {
      url: "https://medium.com/@sandeep15mca/running-angular-app-over-https-with-a-trusted-certificate-af8b6742160f",
      title: "Running Angular App over HTTPS with a Trusted Certificate",
      description:
        "Obtain a trusted SSL certificate: For testing purposes, you can generate a self-signed certificate using OpenSSL. Here’s how",
      category: "Security",
      readTime: "4 min read",
    },
    {
      url: "https://medium.com/@sandeep15mca/addressing-the-producer-consumer-challenge-facilitating-inter-thread-communication-in-java-b21d95809546",
      title:
        "Addressing the Producer-Consumer Challenge: Facilitating Inter-Thread Communication in Java",
      description:
        "Navigating the Challenges of Java Producer-Consumer Problem: A Thorough Exploration and Solutions",
      category: "Java",
      readTime: "7 min read",
    },
  ],
};

export { blogSection };
