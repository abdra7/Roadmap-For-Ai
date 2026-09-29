/* ============================================
   AI Engineering Roadmap — App Logic
   ============================================ */

// --- Data ---

const TOPICS = [
    {
        id: 0,
        name: "Data Foundations & ML & Model Evaluation",
        shortName: "Data & ML",
        description: "Master data handling, ML fundamentals, and evaluation metrics",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
        lessons: [
            { id: "0-1", title: "Data Cleaning & Preprocessing", desc: "Handle missing values, outliers, and data normalization techniques.", duration: "45min", keyPoints: ["Missing value strategies", "Outlier detection", "Feature scaling", "Train/test splits"] },
            { id: "0-2", title: "Exploratory Data Analysis", desc: "Visualize and understand data distributions, correlations, and patterns.", duration: "60min", keyPoints: ["Distribution analysis", "Correlation matrices", "Feature relationships", "Data visualization"] },
            { id: "0-3", title: "Supervised Learning Fundamentals", desc: "Regression, classification, and the bias-variance tradeoff.", duration: "90min", keyPoints: ["Linear/logistic regression", "Decision trees", "Bias-variance tradeoff", "Cross-validation"] },
            { id: "0-4", title: "Unsupervised Learning", desc: "Clustering, dimensionality reduction, and anomaly detection.", duration: "75min", keyPoints: ["K-means clustering", "PCA", "DBSCAN", "Anomaly detection"] },
            { id: "0-5", title: "Model Evaluation Metrics", desc: "Accuracy, precision, recall, F1, AUC-ROC, and when to use each.", duration: "60min", keyPoints: ["Classification metrics", "Regression metrics", "Confusion matrices", "Metric selection"] },
            { id: "0-6", title: "Feature Engineering", desc: "Create meaningful features that improve model performance.", duration: "80min", keyPoints: ["Feature selection", "Feature creation", "Encoding categorical variables", "Feature importance"] },
            { id: "0-7", title: "Data Pipeline Design", desc: "Build reproducible data pipelines for production ML systems.", duration: "70min", keyPoints: ["ETL vs ELT", "Data validation", "Pipeline orchestration", "Data versioning"] }
        ]
    },
    {
        id: 1,
        name: "AI Foundations & Deep Learning",
        shortName: "Deep Learning",
        description: "Neural networks, transformers, and modern AI architectures",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><circle cx="15" cy="15" r="2"/><path d="M9 11h4a2 2 0 012 2v.5"/></svg>',
        lessons: [
            { id: "1-1", title: "Neural Network Basics", desc: "Perceptrons, activation functions, and backpropagation.", duration: "90min", keyPoints: ["Perceptron model", "Activation functions", "Backpropagation", "Gradient descent"] },
            { id: "1-2", title: "Convolutional Neural Networks", desc: "CNNs for image processing, object detection, and segmentation.", duration: "100min", keyPoints: ["Convolution operations", "Pooling layers", "Architecture patterns", "Transfer learning"] },
            { id: "1-3", title: "Recurrent Neural Networks & LSTMs", desc: "Sequence modeling with RNNs, LSTMs, and GRUs.", duration: "80min", keyPoints: ["Sequence modeling", "LSTM cells", "GRU variants", "Bidirectional RNNs"] },
            { id: "1-4", title: "Transformer Architecture", desc: "Self-attention, multi-head attention, and the transformer block.", duration: "120min", keyPoints: ["Self-attention mechanism", "Multi-head attention", "Positional encoding", "Encoder-decoder"] },
            { id: "1-5", title: "Large Language Models", desc: "GPT, BERT, and the scaling laws behind LLMs.", duration: "100min", keyPoints: ["Pre-training objectives", "Fine-tuning", "Scaling laws", "Emergent abilities"] },
            { id: "1-6", title: "Generative Models", desc: "GANs, VAEs, diffusion models, and generative AI.", duration: "90min", keyPoints: ["GAN architecture", "VAE latent space", "Diffusion process", "Image generation"] },
            { id: "1-7", title: "Model Optimization", desc: "Pruning, quantization, distillation, and efficient inference.", duration: "85min", keyPoints: ["Model pruning", "Quantization", "Knowledge distillation", "ONNX/TensorRT"] }
        ]
    },
    {
        id: 2,
        name: "AI Software Engineering & Integration",
        shortName: "AI Engineering",
        description: "Build production-grade AI applications and APIs",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>',
        lessons: [
            { id: "2-1", title: "Python for AI Engineering", desc: "Advanced Python patterns for AI/ML codebases.", duration: "75min", keyPoints: ["Type hints", "Async programming", "Design patterns", "Testing strategies"] },
            { id: "2-2", title: "API Design for AI Models", desc: "REST and gRPC APIs for model serving and inference.", duration: "70min", keyPoints: ["RESTful design", "gRPC basics", "Request/response schemas", "Versioning"] },
            { id: "2-3", title: "Prompt Engineering", desc: "Craft effective prompts for LLMs and generative models.", duration: "60min", keyPoints: ["Few-shot prompting", "Chain-of-thought", "System prompts", "Prompt templates"] },
            { id: "2-4", title: "RAG Systems", desc: "Retrieval-Augmented Generation for knowledge-grounded AI.", duration: "90min", keyPoints: ["Vector databases", "Embedding models", "Retrieval strategies", "Context assembly"] },
            { id: "2-5", title: "AI Agent Frameworks", desc: "Build autonomous agents with tool use and planning.", duration: "100min", keyPoints: ["Tool calling", "Planning strategies", "Memory systems", "Multi-agent coordination"] },
            { id: "2-6", title: "LLM Application Patterns", desc: "Patterns for building robust LLM-powered applications.", duration: "80min", keyPoints: ["Streaming responses", "Structured output", "Guardrails", "Fallback strategies"] },
            { id: "2-7", title: "Testing AI Systems", desc: "Unit tests, integration tests, and evaluation for AI apps.", duration: "70min", keyPoints: ["Model testing", "Integration testing", "Eval frameworks", "Regression testing"] }
        ]
    },
    {
        id: 3,
        name: "MLOps, Deployment & Reliability",
        shortName: "MLOps",
        description: "Ship models to production and keep them running",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
        lessons: [
            { id: "3-1", title: "Model Serving Patterns", desc: "Batch, real-time, and streaming inference architectures.", duration: "80min", keyPoints: ["Batch inference", "Real-time serving", "Streaming inference", "Model caching"] },
            { id: "3-2", title: "Containerization for ML", desc: "Docker and Kubernetes for ML workloads.", duration: "90min", keyPoints: ["Docker basics", "Multi-stage builds", "K8s deployments", "GPU scheduling"] },
            { id: "3-3", title: "CI/CD for ML", desc: "Automated pipelines for training, testing, and deployment.", duration: "85min", keyPoints: ["Pipeline automation", "Model validation gates", "A/B testing", "Rollback strategies"] },
            { id: "3-4", title: "Model Monitoring", desc: "Track model performance, drift, and data quality in production.", duration: "75min", keyPoints: ["Performance monitoring", "Data drift detection", "Concept drift", "Alerting systems"] },
            { id: "3-5", title: "Feature Stores", desc: "Centralized feature management for training and serving.", duration: "70min", keyPoints: ["Feature registry", "Online/offline stores", "Feature consistency", "Point-in-time correctness"] },
            { id: "3-6", title: "Model Registry & Versioning", desc: "Track model versions, lineage, and artifacts.", duration: "60min", keyPoints: ["Model versioning", "Artifact storage", "Lineage tracking", "Model stages"] },
            { id: "3-7", title: "Reliability Engineering", desc: "SLOs, error budgets, and incident response for ML systems.", duration: "80min", keyPoints: ["SLOs for ML", "Error budgets", "Incident response", "Post-mortems"] }
        ]
    },
    {
        id: 4,
        name: "Architecture, Infrastructure, Performance & Scalability",
        shortName: "Architecture",
        description: "Design systems that scale and perform under load",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
        lessons: [
            { id: "4-1", title: "System Design for AI", desc: "Design scalable AI systems from scratch.", duration: "100min", keyPoints: ["Requirements gathering", "Capacity planning", "Component design", "Trade-off analysis"] },
            { id: "4-2", title: "Distributed Training", desc: "Data parallelism, model parallelism, and pipeline parallelism.", duration: "110min", keyPoints: ["Data parallelism", "Model parallelism", "Pipeline parallelism", "Mixed precision"] },
            { id: "4-3", title: "GPU Optimization", desc: "Maximize GPU utilization for training and inference.", duration: "90min", keyPoints: ["CUDA basics", "Memory optimization", "Kernel optimization", "Profiling tools"] },
            { id: "4-4", title: "Cloud Infrastructure for AI", desc: "AWS, GCP, and Azure services for AI workloads.", duration: "85min", keyPoints: ["Cloud GPU instances", "Managed AI services", "Cost optimization", "Multi-cloud strategies"] },
            { id: "4-5", title: "Edge Deployment", desc: "Deploy models on edge devices and mobile platforms.", duration: "80min", keyPoints: ["Model optimization", "ONNX Runtime", "TensorFlow Lite", "Core ML"] },
            { id: "4-6", title: "Caching & Performance", desc: "Reduce latency with caching, batching, and optimization.", duration: "70min", keyPoints: ["Response caching", "Request batching", "Load balancing", "CDN strategies"] },
            { id: "4-7", title: "Cost Optimization", desc: "Reduce infrastructure costs without sacrificing performance.", duration: "65min", keyPoints: ["Spot instances", "Auto-scaling", "Right-sizing", "Cost monitoring"] }
        ]
    },
    {
        id: 5,
        name: "Responsible AI, Security & Governance",
        shortName: "Responsible AI",
        description: "Build AI systems that are fair, safe, and compliant",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        lessons: [
            { id: "5-1", title: "AI Ethics & Fairness", desc: "Bias detection, fairness metrics, and ethical AI design.", duration: "80min", keyPoints: ["Types of bias", "Fairness metrics", "Mitigation strategies", "Ethical frameworks"] },
            { id: "5-2", title: "Model Explainability", desc: "SHAP, LIME, and techniques for interpreting model predictions.", duration: "75min", keyPoints: ["SHAP values", "LIME", "Attention visualization", "Counterfactual explanations"] },
            { id: "5-3", title: "AI Security", desc: "Adversarial attacks, prompt injection, and defense strategies.", duration: "90min", keyPoints: ["Adversarial examples", "Prompt injection", "Model extraction", "Defense mechanisms"] },
            { id: "5-4", title: "Privacy-Preserving ML", desc: "Differential privacy, federated learning, and secure computation.", duration: "85min", keyPoints: ["Differential privacy", "Federated learning", "Secure aggregation", "Homomorphic encryption"] },
            { id: "5-5", title: "AI Governance", desc: "Policies, compliance, and organizational AI governance.", duration: "70min", keyPoints: ["AI policies", "Compliance frameworks", "Risk assessment", "Audit trails"] },
            { id: "5-6", title: "Regulatory Compliance", desc: "GDPR, EU AI Act, and other AI regulations.", duration: "75min", keyPoints: ["GDPR for AI", "EU AI Act", "Sector regulations", "Compliance checklists"] },
            { id: "5-7", title: "Red Teaming AI", desc: "Systematic testing for AI safety and robustness.", duration: "80min", keyPoints: ["Red team methodology", "Safety testing", "Stress testing", "Incident reporting"] }
        ]
    },
    {
        id: 6,
        name: "Business, Professional Practices & Collaboration",
        shortName: "Professional",
        desc: "Soft skills and business acumen for AI professionals",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
        lessons: [
            { id: "6-1", title: "AI Project Management", desc: "Plan, execute, and deliver AI projects successfully.", duration: "70min", keyPoints: ["Project scoping", "Timeline estimation", "Risk management", "Stakeholder communication"] },
            { id: "6-2", title: "Technical Communication", desc: "Present AI concepts to technical and non-technical audiences.", duration: "60min", keyPoints: ["Audience adaptation", "Visual storytelling", "Documentation", "Presentation skills"] },
            { id: "6-3", title: "AI Product Strategy", desc: "Define AI product vision, roadmap, and success metrics.", duration: "75min", keyPoints: ["Product vision", "Roadmap planning", "Success metrics", "User research"] },
            { id: "6-4", title: "Collaboration & Code Review", desc: "Work effectively in AI/ML teams with best practices.", duration: "55min", keyPoints: ["Code review etiquette", "Pair programming", "Knowledge sharing", "Mentoring"] },
            { id: "6-5", title: "AI Career Development", desc: "Navigate career paths in AI engineering and research.", duration: "65min", keyPoints: ["Career paths", "Skill development", "Networking", "Personal branding"] },
            { id: "6-6", title: "AI Business Cases", desc: "Build the business case for AI initiatives.", duration: "70min", keyPoints: ["ROI analysis", "Cost-benefit analysis", "Risk assessment", "Executive buy-in"] },
            { id: "6-7", title: "Continuous Learning", desc: "Stay current with the fast-moving AI field.", duration: "50min", keyPoints: ["Learning strategies", "Research paper reading", "Community involvement", "Experimentation"] }
        ]
    }
];

const MEMORY_CARDS = [
    { topic: 0, title: "Bias-Variance Tradeoff", body: "High bias = underfitting (too simple). High variance = overfitting (too complex). The goal is to find the sweet spot that minimizes total error." },
    { topic: 0, title: "Precision vs Recall", body: "Precision = TP/(TP+FP) — how many selected items are relevant. Recall = TP/(TP+FN) — how many relevant items were selected. Trade-off depends on use case." },
    { topic: 1, title: "Attention Is All You Need", body: "The 2017 paper that introduced the Transformer. Self-attention computes relevance between all positions in parallel, enabling massive parallelization and capturing long-range dependencies." },
    { topic: 1, title: "Backpropagation", body: "Chain rule applied to compute gradients of the loss w.r.t. each weight. Forward pass computes output, backward pass distributes error and updates weights." },
    { topic: 2, title: "RAG Pattern", body: "Retrieve relevant documents → embed query → find similar chunks → inject into prompt → generate grounded response. Reduces hallucination by grounding in real data." },
    { topic: 2, title: "Prompt Engineering", body: "System prompt sets behavior. Few-shot examples guide format. Chain-of-thought improves reasoning. Clear constraints reduce ambiguity." },
    { topic: 3, title: "Model Drift", body: "Data drift = input distribution changes. Concept drift = input-output relationship changes. Both degrade model performance over time. Monitor and retrain." },
    { topic: 3, title: "Feature Store", body: "Centralized repository for features. Ensures training-serving consistency. Supports online (low-latency) and offline (batch) access patterns." },
    { topic: 4, title: "Data vs Model Parallelism", body: "Data parallelism: split data across devices, each has full model. Model parallelism: split model across devices. Pipeline parallelism: split layers across stages." },
    { topic: 4, title: "GPU Memory Hierarchy", body: "Registers → Shared memory → L1/L2 cache → Global memory → Host memory. Minimize data movement. Use mixed precision to halve memory usage." },
    { topic: 5, title: "Differential Privacy", body: "Add calibrated noise to data or gradients so that individual records cannot be identified. Privacy budget (ε) controls the privacy-utility tradeoff." },
    { topic: 5, title: "Adversarial Examples", body: "Small, imperceptible perturbations to inputs that cause models to misclassify. Defenses: adversarial training, input preprocessing, certified robustness." },
    { topic: 6, title: "AI Project Lifecycle", body: "Problem definition → Data collection → Model development → Evaluation → Deployment → Monitoring → Iteration. Most time is spent on data, not modeling." },
    { topic: 6, title: "Stakeholder Communication", body: "Translate technical metrics to business impact. Use visualizations. Set realistic expectations. Communicate risks and limitations honestly." }
];

const GLOSSARY = [
    { term: "Backpropagation", def: "Algorithm for computing gradients of the loss function with respect to neural network weights using the chain rule." },
    { term: "Embedding", def: "A dense vector representation of discrete data (words, items) in a continuous space where similar items are closer together." },
    { term: "Fine-tuning", def: "Adapting a pre-trained model to a specific task by continuing training on task-specific data." },
    { term: "Gradient Descent", def: "Optimization algorithm that iteratively adjusts parameters in the direction of steepest descent of the loss function." },
    { term: "Hallucination", def: "When an LLM generates plausible-sounding but factually incorrect or nonsensical content." },
    { term: "Hyperparameter", def: "A configuration variable set before training begins (learning rate, batch size, epochs) as opposed to parameters learned during training." },
    { term: "Inference", def: "The process of using a trained model to make predictions on new, unseen data." },
    { term: "Loss Function", def: "A function that measures the difference between predicted and actual values, providing the signal for model optimization." },
    { term: "Overfitting", def: "When a model learns training data too well, including noise and outliers, resulting in poor generalization to new data." },
    { term: "Prompt", def: "The input text provided to a language model to guide its output generation." },
    { term: "Regularization", def: "Techniques (L1, L2, dropout) that prevent overfitting by penalizing model complexity." },
    { term: "Token", def: "The basic unit of text processed by a language model — can be a word, subword, or character depending on the tokenizer." },
    { term: "Transformer", def: "A neural network architecture based entirely on self-attention mechanisms, without recurrence or convolution." },
    { term: "Vector Database", def: "A database optimized for storing and querying high-dimensional vectors, enabling similarity search for RAG and recommendations." }
];

// --- State Management ---

const STORAGE_KEY = 'ai_roadmap_state';

function getDefaultState() {
    const completedLessons = {};
    const lessonTimestamps = {};
    const activityLog = [];
    let studyMinutes = 0;
    let lastStudyDate = null;
    let dayStreak = 0;

    return {
        completedLessons,
        lessonTimestamps,
        activityLog,
        studyMinutes,
        lastStudyDate,
        dayStreak
    };
}

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.warn('Failed to load state:', e);
    }
    return getDefaultState();
}

function saveState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.warn('Failed to save state:', e);
    }
}

let state = loadState();

// --- Helpers ---

function getToday() {
    return new Date().toISOString().split('T')[0];
}

function getYesterday() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split('T')[0];
}

function formatTime(isoString) {
    const date = new Date(isoString);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
}

function getTopicProgress(topicId) {
    const topic = TOPICS[topicId];
    const completed = topic.lessons.filter(l => state.completedLessons[l.id]).length;
    return {
        completed,
        total: topic.lessons.length,
        percent: Math.round((completed / topic.lessons.length) * 100)
    };
}

function getOverallProgress() {
    let total = 0;
    let completed = 0;
    TOPICS.forEach(t => {
        total += t.lessons.length;
        t.lessons.forEach(l => {
            if (state.completedLessons[l.id]) completed++;
        });
    });
    return { total, completed, percent: total > 0 ? Math.round((completed / total) * 100) : 0 };
}

function getWeaknesses() {
    return TOPICS.map(t => {
        const progress = getTopicProgress(t.id);
        return { topic: t, ...progress };
    })
    .filter(t => t.percent < 100)
    .sort((a, b) => a.percent - b.percent)
    .slice(0, 4);
}

function updateStreak() {
    const today = getToday();
    const yesterday = getYesterday();

    if (state.lastStudyDate === today) {
        // Already studied today, no change
        return;
    }

    if (state.lastStudyDate === yesterday) {
        // Consecutive day
        state.dayStreak++;
    } else if (state.lastStudyDate !== today) {
        // Streak broken or first time
        state.dayStreak = 1;
    }

    state.lastStudyDate = today;
}

function addActivity(type, text) {
    state.activityLog.unshift({
        type,
        text,
        timestamp: new Date().toISOString()
    });
    // Keep only last 50 activities
    if (state.activityLog.length > 50) {
        state.activityLog = state.activityLog.slice(0, 50);
    }
}

function showToast(title, message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-icon ${type}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${type === 'success' ? '<path d="M20 6L9 17l-5-5"/>' : '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>'}
            </svg>
        </div>
        <div class="toast-content">
            <span class="toast-title">${title}</span>
            <span class="toast-message">${message}</span>
        </div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- Rendering ---

function renderTowers() {
    const grid = document.getElementById('towersGrid');
    grid.innerHTML = TOPICS.map(topic => {
        const progress = getTopicProgress(topic.id);
        const floors = topic.lessons.map((lesson, i) => {
            const isCompleted = state.completedLessons[lesson.id];
            const isCurrent = !isCompleted && i === progress.completed;
            const isLocked = !isCompleted && i > progress.completed;
            const height = 8 + (i * 6);
            return `<div class="tower-floor ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''}" style="height: ${height}px" title="${lesson.title}"></div>`;
        }).join('');

        return `
            <div class="tower-card" data-topic="${topic.id}" onclick="openTopic(${topic.id})">
                <div class="tower-header">
                    <div class="tower-icon">${topic.icon}</div>
                    <div class="tower-info">
                        <h3>${topic.name}</h3>
                        <p>${topic.description}</p>
                    </div>
                </div>
                <div class="tower-visual">${floors}</div>
                <div class="tower-progress">
                    <div class="tower-progress-bar">
                        <div class="tower-progress-fill" style="width: ${progress.percent}%"></div>
                    </div>
                    <span class="tower-progress-text">${progress.completed}/${progress.total}</span>
                </div>
            </div>
        `;
    }).join('');
}

function renderSidebar() {
    const overall = getOverallProgress();

    // Progress ring
    const circumference = 2 * Math.PI * 52; // r=52
    const offset = circumference - (overall.percent / 100) * circumference;
    document.getElementById('progressRingFill').style.strokeDashoffset = offset;
    document.getElementById('progressPercent').textContent = `${overall.percent}%`;
    document.getElementById('completedLessons').textContent = overall.completed;
    document.getElementById('totalLessons').textContent = overall.total;

    // Stats
    document.getElementById('dayStreak').textContent = state.dayStreak;
    document.getElementById('studyHours').textContent = `${Math.round(state.studyMinutes / 60 * 10) / 10}h`;

    let unlockedFloors = 0;
    TOPICS.forEach(t => {
        t.lessons.forEach(l => {
            if (state.completedLessons[l.id]) unlockedFloors++;
        });
    });
    document.getElementById('unlockedFloors').textContent = unlockedFloors;

    // Weakness panel
    const weaknesses = getWeaknesses();
    const weaknessList = document.getElementById('weaknessList');
    if (weaknesses.length === 0) {
        weaknessList.innerHTML = '<p style="font-size:0.8rem;color:var(--text-muted);text-align:center;padding:12px;">All topics complete! 🎉</p>';
    } else {
        weaknessList.innerHTML = weaknesses.map(w => `
            <div class="weakness-item" data-topic="${w.topic.id}">
                <div class="weakness-dot"></div>
                <div class="weakness-info">
                    <div class="weakness-name">${w.topic.shortName}</div>
                    <div class="weakness-bar">
                        <div class="weakness-bar-fill" style="width: ${w.percent}%"></div>
                    </div>
                </div>
                <span class="weakness-pct">${w.percent}%</span>
            </div>
        `).join('');
    }

    // Learning track
    document.getElementById('trackFill').style.width = `${overall.percent}%`;
    document.getElementById('trackText').textContent = `${overall.completed} / ${overall.total} lessons`;

    const trackLegend = document.getElementById('trackLegend');
    trackLegend.innerHTML = TOPICS.map(t => {
        const p = getTopicProgress(t.id);
        return `<div class="track-legend-item">
            <div class="track-legend-dot" style="background: ${getTopicColor(t.id)}"></div>
            <span>${t.shortName} (${p.completed}/${p.total})</span>
        </div>`;
    }).join('');
}

function getTopicColor(id) {
    const colors = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#3b82f6', '#ec4899', '#f59e0b'];
    return colors[id] || '#6366f1';
}

function renderMemoryCards() {
    const container = document.getElementById('memoryCards');
    container.innerHTML = MEMORY_CARDS.map(card => `
        <div class="memory-card" data-topic="${card.topic}">
            <div class="memory-card-header">
                <span class="memory-card-topic">${TOPICS[card.topic].shortName}</span>
            </div>
            <div class="memory-card-title">${card.title}</div>
            <div class="memory-card-body">${card.body}</div>
        </div>
    `).join('');
}

function renderGlossary() {
    const container = document.getElementById('glossaryGrid');
    container.innerHTML = GLOSSARY.map(item => `
        <div class="glossary-item">
            <div class="glossary-term">${item.term}</div>
            <div class="glossary-def">${item.def}</div>
        </div>
    `).join('');
}

function renderActivity() {
    const container = document.getElementById('activityFeed');
    if (state.activityLog.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <p>No activity yet. Complete a lesson to get started!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = state.activityLog.slice(0, 20).map(item => {
        const iconMap = {
            complete: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',
            start: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
            streak: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>'
        };
        return `
            <div class="activity-item">
                <div class="activity-icon ${item.type}">${iconMap[item.type] || iconMap.start}</div>
                <div class="activity-content">
                    <div class="activity-text">${item.text}</div>
                    <div class="activity-time">${formatTime(item.timestamp)}</div>
                </div>
            </div>
        `;
    }).join('');
}

function renderMiniMap() {
    const container = document.getElementById('miniMap');
    container.innerHTML = TOPICS.map(topic => {
        const progress = getTopicProgress(topic.id);
        const floors = topic.lessons.map((lesson, i) => {
            const isCompleted = state.completedLessons[lesson.id];
            return `<div class="mini-map-floor ${isCompleted ? 'completed' : 'locked'}"></div>`;
        }).join('');

        return `
            <div class="mini-map-tower" onclick="closeMap(); openTopic(${topic.id});">
                <div class="mini-map-tower-bar">${floors}</div>
                <div class="mini-map-tower-name">${topic.shortName}</div>
            </div>
        `;
    }).join('');
}

// --- Actions ---

function openTopic(topicId) {
    const topic = TOPICS[topicId];
    const progress = getTopicProgress(topic.id);

    const modal = document.getElementById('lessonModal');
    const title = document.getElementById('lessonModalTitle');
    const body = document.getElementById('lessonModalBody');

    title.textContent = topic.name;

    const lessonsHtml = topic.lessons.map((lesson, i) => {
        const isCompleted = state.completedLessons[lesson.id];
        const isCurrent = !isCompleted && i === progress.completed;
        const isLocked = !isCompleted && i > progress.completed;

        return `
            <div style="margin-bottom: 20px; padding: 16px; background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <h4 style="color: ${isCompleted ? 'var(--accent-green)' : isCurrent ? 'var(--accent-indigo)' : 'var(--text-muted)'}">
                        ${isCompleted ? '✓ ' : isLocked ? '🔒 ' : ''}${lesson.title}
                    </h4>
                    <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${lesson.duration}</span>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 10px;">${lesson.desc}</p>
                <ul style="font-size: 0.8rem; color: var(--text-muted); margin-left: 16px; margin-bottom: 12px;">
                    ${lesson.keyPoints.map(kp => `<li>${kp}</li>`).join('')}
                </ul>
                ${isCompleted
                    ? '<button class="lesson-complete-btn" disabled style="opacity:0.5;">✓ Completed</button>'
                    : isLocked
                        ? '<button class="lesson-complete-btn" disabled style="opacity:0.3;">Complete previous lesson first</button>'
                        : `<button class="lesson-complete-btn" onclick="completeLesson('${lesson.id}', ${topicId})">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                            Mark Complete
                        </button>`
                }
            </div>
        `;
    }).join('');

    body.innerHTML = lessonsHtml;
    modal.classList.add('active');
}

function completeLesson(lessonId, topicId) {
    if (state.completedLessons[lessonId]) return;

    const topic = TOPICS[topicId];
    const lesson = topic.lessons.find(l => l.id === lessonId);

    // Mark complete
    state.completedLessons[lessonId] = true;
    state.lessonTimestamps[lessonId] = new Date().toISOString();

    // Parse duration (e.g., "45min" -> 45)
    const durationMatch = lesson.duration.match(/(\d+)/);
    if (durationMatch) {
        state.studyMinutes += parseInt(durationMatch[1]);
    }

    // Update streak
    updateStreak();

    // Add activity
    addActivity('complete', `Completed "${lesson.title}" in ${topic.shortName}`);

    // Check if this was the last lesson in the topic
    const progress = getTopicProgress(topicId);
    if (progress.completed === progress.total) {
        addActivity('streak', `🏆 Completed entire ${topic.name} tower!`);
    }

    // Save and re-render
    saveState(state);
    renderAll();

    // Show toast
    showToast('Lesson Complete!', `"${lesson.title}" — ${topic.shortName}`, 'success');

    // Refresh the modal
    openTopic(topicId);
}

function closeLessonModal() {
    document.getElementById('lessonModal').classList.remove('active');
}

function openMap() {
    renderMiniMap();
    document.getElementById('mapModal').classList.add('active');
}

function closeMap() {
    document.getElementById('mapModal').classList.remove('active');
}

function toggleSearch() {
    const bar = document.getElementById('searchBar');
    bar.classList.toggle('active');
    if (bar.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

function performSearch(query) {
    if (!query.trim()) {
        renderAll();
        return;
    }

    const q = query.toLowerCase();

    // Filter towers
    const filteredTopics = TOPICS.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.lessons.some(l => l.title.toLowerCase().includes(q) || l.desc.toLowerCase().includes(q))
    );

    const grid = document.getElementById('towersGrid');
    if (filteredTopics.length === 0) {
        grid.innerHTML = '<div class="empty-state" style="grid-column: 1/-1;"><p>No results found for "' + query + '"</p></div>';
    } else {
        grid.innerHTML = filteredTopics.map(topic => {
            const progress = getTopicProgress(topic.id);
            const floors = topic.lessons.map((lesson, i) => {
                const isCompleted = state.completedLessons[lesson.id];
                const isCurrent = !isCompleted && i === progress.completed;
                const isLocked = !isCompleted && i > progress.completed;
                const height = 8 + (i * 6);
                return `<div class="tower-floor ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''}" style="height: ${height}px"></div>`;
            }).join('');

            return `
                <div class="tower-card" data-topic="${topic.id}" onclick="openTopic(${topic.id})">
                    <div class="tower-header">
                        <div class="tower-icon">${topic.icon}</div>
                        <div class="tower-info">
                            <h3>${topic.name}</h3>
                            <p>${topic.description}</p>
                        </div>
                    </div>
                    <div class="tower-visual">${floors}</div>
                    <div class="tower-progress">
                        <div class="tower-progress-bar">
                            <div class="tower-progress-fill" style="width: ${progress.percent}%"></div>
                        </div>
                        <span class="tower-progress-text">${progress.completed}/${progress.total}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Filter memory cards
    const filteredCards = MEMORY_CARDS.filter(c =>
        c.title.toLowerCase().includes(q) || c.body.toLowerCase().includes(q)
    );
    document.getElementById('memoryCards').innerHTML = filteredCards.length > 0
        ? filteredCards.map(card => `
            <div class="memory-card" data-topic="${card.topic}">
                <div class="memory-card-header"><span class="memory-card-topic">${TOPICS[card.topic].shortName}</span></div>
                <div class="memory-card-title">${card.title}</div>
                <div class="memory-card-body">${card.body}</div>
            </div>
        `).join('')
        : '<div class="empty-state" style="grid-column: 1/-1;"><p>No memory cards match</p></div>';

    // Filter glossary
    const filteredGlossary = GLOSSARY.filter(g =>
        g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q)
    );
    document.getElementById('glossaryGrid').innerHTML = filteredGlossary.length > 0
        ? filteredGlossary.map(item => `
            <div class="glossary-item">
                <div class="glossary-term">${item.term}</div>
                <div class="glossary-def">${item.def}</div>
            </div>
        `).join('')
        : '<div class="empty-state" style="grid-column: 1/-1;"><p>No glossary terms match</p></div>';
}

function renderAll() {
    renderTowers();
    renderSidebar();
    renderMemoryCards();
    renderGlossary();
    renderActivity();
}

// --- Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    renderAll();

    // Search
    document.getElementById('searchBtn').addEventListener('click', toggleSearch);
    document.getElementById('searchClose').addEventListener('click', () => {
        document.getElementById('searchBar').classList.remove('active');
        document.getElementById('searchInput').value = '';
        renderAll();
    });
    document.getElementById('searchInput').addEventListener('input', (e) => {
        performSearch(e.target.value);
    });

    // Map
    document.getElementById('mapBtn').addEventListener('click', openMap);
    document.getElementById('mapClose').addEventListener('click', closeMap);
    document.getElementById('mapOverlay').addEventListener('click', closeMap);

    // Lesson modal
    document.getElementById('lessonClose').addEventListener('click', closeLessonModal);
    document.getElementById('lessonOverlay').addEventListener('click', closeLessonModal);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLessonModal();
            closeMap();
            document.getElementById('searchBar').classList.remove('active');
        }
        if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
            const active = document.activeElement;
            if (active.tagName !== 'INPUT' && active.tagName !== 'TEXTAREA') {
                e.preventDefault();
                toggleSearch();
            }
        }
    });
});
