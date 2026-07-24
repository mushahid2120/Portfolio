export const projects = [
  {
    id: 1,
    index: '01',
    name: 'BookKart — Full-Stack Marketplace',
    description: 'A full-stack marketplace for buying and selling used books. Next.js 16 App Router frontend with role-separated customer/admin layouts, Express + TypeScript API, JWT access/refresh auth, Razorpay checkout, and Cloudinary image handling.',
    type: 'full-stack',
    tags: ['Next.js 16', 'TypeScript', 'Express', 'MongoDB', 'Redux Toolkit', 'Razorpay'],
    image: 'https://via.placeholder.com/600x220?text=BookKart+Marketplace',
    logo: 'https://via.placeholder.com/48x48?text=BK',
    links: {
      live: 'https://github.com/mushahid2120/BookKart_Ecommerce_FullStack',
      source: 'https://github.com/mushahid2120/BookKart_Ecommerce_FullStack'
    }
  },
  {
    id: 2,
    index: '02',
    name: 'Drive — Cloud Storage Platform',
    description: 'A Google-Drive-style storage app with paid subscription tiers. Session-based auth with instant revocation, direct-to-S3 uploads via pre-signed URLs, CloudFront-signed downloads, and Razorpay billing driven entirely by signature-verified webhooks. Shipped to both a traditional server and AWS Lambda from one codebase.',
    type: 'full-stack',
    tags: ['React 19', 'Node / Express 5', 'MongoDB', 'AWS S3 + CloudFront', 'Redis'],
    image: 'https://via.placeholder.com/600x220?text=Cloud+Storage',
    logo: 'https://via.placeholder.com/48x48?text=DR',
    links: {
      live: 'https://github.com/mushahid2120/your-drive-storage-app-frontend',
      source: 'https://github.com/mushahid2120/your-drive-storage-app-backend'
    }
  },
  {
    id: 3,
    index: '03',
    name: 'BlogSpace — Appwrite Blogging Platform',
    description: 'A blogging platform built on Appwrite as a full backend-as-a-service — auth, database, and storage handled through Appwrite\'s SDK, with a rich-text editor and client-side image compression before upload.',
    type: 'full-stack',
    tags: ['React 19', 'Appwrite', 'Redux Toolkit', 'TinyMCE'],
    image: 'https://via.placeholder.com/600x220?text=BlogSpace',
    logo: 'https://via.placeholder.com/48x48?text=BS',
    links: {
      live: 'https://github.com/mushahid2120/BlogingApp-Appwrite-Frontend',
      source: 'https://github.com/mushahid2120/BlogingApp-Appwrite-Frontend'
    }
  },
  {
    id: 4,
    index: 'AI / 01',
    name: 'Expense Tracker — MCP Server',
    description: 'A deployed Model Context Protocol server that lets AI assistants like Claude log and query personal expenses in natural language. Built with FastMCP and SQLAlchemy, with typed tool schemas so the calling model gets schema-level validation for free.',
    type: 'ai',
    tags: ['AI / MCP', 'Python', 'FastMCP', 'SQLAlchemy', 'MySQL'],
    image: 'https://via.placeholder.com/600x220?text=MCP+Server',
    logo: 'https://via.placeholder.com/48x48?text=ET',
    links: {
      live: 'https://mushahid-mcp-expense-tracker.fastmcp.app/mcp',
      source: 'https://github.com/mushahid2120/Expense_Tracker_MCP_Server'
    }
  },
  {
    id: 5,
    index: 'AI / 02',
    name: 'MCP Client & Agentic Tool-Calling',
    description: 'The consumer half of MCP most developers skip: a LangChain-based client that binds a remote MCP server\'s tools to Gemini and handles the full request → tool call → response loop. Paired with a separate agentic chat system (Groq + Tavily web search) that summarizes conversation history to keep context bounded over long sessions.',
    type: 'ai',
    tags: ['AI / Agents', 'LangChain', 'Gemini', 'Groq', 'Tavily'],
    image: 'https://via.placeholder.com/600x220?text=MCP+Client',
    logo: 'https://via.placeholder.com/48x48?text=MC',
    links: {
      live: 'https://github.com/mushahid2120/Practice/tree/main/GenAI/MCP',
      source: 'https://github.com/mushahid2120/Practice/tree/main/GenAI/MCP'
    }
  },
  {
    id: 6,
    index: 'AI / 03',
    name: 'RAG Pipeline & Streaming Chatbot',
    description: 'A grounded PDF Q&A pipeline — chunking, Gemini embeddings, Pinecone retrieval, and Groq generation constrained to answer only from retrieved context. Alongside it, a FastAPI + LangGraph chatbot with async SQLite checkpointing for persistent, multi-thread streaming conversations.',
    type: 'ai',
    tags: ['AI / RAG', 'LangGraph', 'Pinecone', 'FastAPI'],
    image: 'https://via.placeholder.com/600x220?text=RAG+Pipeline',
    logo: 'https://via.placeholder.com/48x48?text=RG',
    links: {
      live: 'https://github.com/mushahid2120/Practice/tree/main/GenAI/RAG',
      source: 'https://github.com/mushahid2120/Practice/tree/main/GenAI/RAG'
    }
  }
]
