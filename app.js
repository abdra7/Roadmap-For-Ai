/* ============================================
   AI Engineering Roadmap — App Logic
   ============================================ */

// Inline SVG icon from the sprite in index.html
const ico = id => `<svg class="i" aria-hidden="true"><use href="#i-${id}"/></svg>`;

// --- Data ---

const TOPICS = [
    {
        id: 0,
        name: "Data Foundations & ML & Model Evaluation",
        shortName: "Data & ML",
        description: "Master data handling, ML fundamentals, and evaluation metrics",
        glyph: 'brain',
        icon: ico('brain'),
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
        glyph: 'neural',
        icon: ico('neural'),
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
        glyph: 'bot',
        icon: ico('bot'),
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
        glyph: 'rocket',
        icon: ico('rocket'),
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
        glyph: 'layers',
        icon: ico('layers'),
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
        glyph: 'shield',
        icon: ico('shield'),
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
        description: "Soft skills and business acumen for AI professionals",
        glyph: 'users',
        icon: ico('users'),
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

// --- Theme (presentation only) ---

// One neon hue per tower. Identity is always paired with a text label, never color alone.
const TOPIC_THEME = [
    { color: '#38bdf8', light: '#bae6fd' }, // Data & ML — sky blue
    { color: '#a855f7', light: '#e9d5ff' }, // Deep Learning — violet
    { color: '#22c55e', light: '#bbf7d0' }, // AI Engineering — green
    { color: '#f5b83d', light: '#fde68a' }, // MLOps — gold
    { color: '#818cf8', light: '#e0e7ff' }, // Architecture — indigo
    { color: '#f472b6', light: '#fbcfe8' }, // Responsible AI — pink
    { color: '#2dd4bf', light: '#ccfbf1' }  // Professional — teal
];

function getTopicColor(id) {
    return (TOPIC_THEME[id] || TOPIC_THEME[0]).color;
}

const DEFAULT_NAME = 'Abdulrahim';

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

// Fill in any fields missing from an older or hand-edited saved state
function normalizeState(saved) {
    const base = getDefaultState();
    const s = Object.assign(base, saved && typeof saved === 'object' ? saved : {});
    if (!s.completedLessons || typeof s.completedLessons !== 'object') s.completedLessons = {};
    if (!s.lessonTimestamps || typeof s.lessonTimestamps !== 'object') s.lessonTimestamps = {};
    if (!Array.isArray(s.activityLog)) s.activityLog = [];
    s.studyMinutes = Number(s.studyMinutes) || 0;
    s.dayStreak = Number(s.dayStreak) || 0;
    return s;
}

let state = normalizeState(loadState());

// --- Helpers ---

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

// Local calendar date (YYYY-MM-DD) so streaks roll over at the learner's midnight, not UTC's
function toDateKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function getToday() {
    return toDateKey(new Date());
}

function getYesterday() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return toDateKey(d);
}

function formatTime(isoString) {
    const date = new Date(isoString);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    if (days < 7) return `${days} day${days === 1 ? '' : 's'} ago`;
    return date.toLocaleDateString();
}

function parseMinutes(duration) {
    const match = String(duration).match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
}

const TOTAL_MINUTES = TOPICS.reduce((sum, t) => sum + t.lessons.reduce((s, l) => s + parseMinutes(l.duration), 0), 0);

function formatHours(minutes) {
    const h = minutes / 60;
    return h >= 10 ? String(Math.round(h)) : String(Math.round(h * 10) / 10);
}

function findLesson(lessonId) {
    for (const topic of TOPICS) {
        const index = topic.lessons.findIndex(l => l.id === lessonId);
        if (index !== -1) return { topic, lesson: topic.lessons[index], index };
    }
    return null;
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

function getNextLesson(topicId) {
    const topic = TOPICS[topicId];
    const progress = getTopicProgress(topicId);
    return progress.completed < topic.lessons.length ? topic.lessons[progress.completed] : null;
}

function getTowersBuilt() {
    return TOPICS.filter(t => getTopicProgress(t.id).completed === t.lessons.length).length;
}

// A streak only counts while it is still alive (studied today or yesterday)
function getEffectiveStreak() {
    if (state.lastStudyDate === getToday() || state.lastStudyDate === getYesterday()) return state.dayStreak || 0;
    return 0;
}

function getRangeStart(range) {
    const now = new Date();
    if (range === 'week') {
        const d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        d.setDate(d.getDate() - d.getDay()); // week starts on Sunday
        return d;
    }
    if (range === 'month') return new Date(now.getFullYear(), now.getMonth(), 1);
    return null;
}

function getStudyMinutesInRange(range) {
    if (range === 'all') return state.studyMinutes || 0;
    const start = getRangeStart(range);
    let minutes = 0;
    Object.keys(state.completedLessons).forEach(id => {
        if (!state.completedLessons[id]) return;
        const ts = state.lessonTimestamps[id];
        const found = findLesson(id);
        if (ts && found && new Date(ts) >= start) minutes += parseMinutes(found.lesson.duration);
    });
    return minutes;
}

function getStudyDays(range) {
    const start = getRangeStart(range);
    const days = new Set();
    Object.entries(state.lessonTimestamps || {}).forEach(([id, ts]) => {
        if (!state.completedLessons[id]) return;
        const d = new Date(ts);
        if (!start || d >= start) days.add(toDateKey(d));
    });
    return days.size;
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
    const region = $('#toastRegion');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.innerHTML = `
        <div class="toast-icon ${type === 'success' ? '' : 'info'}">${ico(type === 'success' ? 'check' : 'sparkle')}</div>
        <div class="toast-content">
            <span class="toast-title">${escapeHtml(title)}</span>
            <span class="toast-message">${escapeHtml(message)}</span>
        </div>
    `;
    region.appendChild(toast);
    while (region.children.length > 3) region.firstElementChild.remove();

    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 220);
    }, 3200);
}

// --- Night City renderer (procedural SVG) ---

const City = (() => {
    const K = 0.46;                // isometric slope (tan 24.7°), matches the skewed window patterns
    const VIEW_H = 800;            // scene height in SVG units; width follows the container
    const PROFILES = [
        { a: 60, fh: 50, taper: [1, 1, .93, .93, .86, .86, .78], crown: 'spire' },
        { a: 46, fh: 39, taper: [1, 1, 1, .94, .94, .88, .88], crown: 'ring' },
        { a: 56, fh: 50, taper: [1, .97, .94, .91, .88, .85, .82], crown: 'antenna' },
        { a: 47, fh: 39, taper: [1, .9, .9, .8, .8, .7, .62], crown: 'spire' },
        { a: 58, fh: 48, taper: [1, 1, 1, .9, .9, .9, .8], crown: 'dish' },
        { a: 45, fh: 39, taper: [1, 1, .95, .9, .85, .8, .75], crown: 'spire' },
        { a: 54, fh: 48, taper: [1, 1, 1, 1, .92, .92, .84], crown: 'antenna' }
    ];

    // --- tiny geometry + string helpers ---
    function rng(seed) {
        let a = seed >>> 0;
        return () => {
            a = (a + 0x6D2B79F5) | 0;
            let t = Math.imul(a ^ (a >>> 15), 1 | a);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }
    const f1 = n => Math.round(n * 10) / 10;
    const P = pts => pts.map(p => `${f1(p[0])},${f1(p[1])}`).join(' ');
    const poly = (pts, fill, extra = '') => `<polygon points="${P(pts)}"${fill ? ` fill="${fill}"` : ''} ${extra}/>`;
    const pline = (pts, stroke, w, op = 1, extra = '') =>
        `<polyline points="${P(pts)}" fill="none" stroke="${stroke}" stroke-width="${f1(w)}" stroke-opacity="${op}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;
    const seg = (p, q, stroke, w, op = 1, extra = '') =>
        `<line x1="${f1(p[0])}" y1="${f1(p[1])}" x2="${f1(q[0])}" y2="${f1(q[1])}" stroke="${stroke}" stroke-width="${f1(w)}" stroke-opacity="${op}" stroke-linecap="round" ${extra}/>`;

    function hexToRgb(hex) {
        const h = hex.replace('#', '');
        return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16));
    }
    function mix(a, b, t) {
        const A = hexToRgb(a), B = hexToRgb(b);
        return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join('');
    }

    // Isometric box with its front-bottom corner at (x, y)
    function box(x, y, aL, aR, h) {
        const L = [x - aL, y - aL * K];
        const R = [x + aR, y - aR * K];
        const F = [x, y];
        const B = [x - aL + aR, y - (aL + aR) * K];
        const up = p => [p[0], p[1] - h];
        return {
            L, R, F, B,
            uL: up(L), uR: up(R), uF: up(F), uB: up(B),
            left: [L, F, up(F), up(L)],
            right: [F, R, up(R), up(F)],
            top: [up(L), up(F), up(R), up(B)],
            topY: y - h
        };
    }

    // A window band inset on one face of a floor
    function strip(p0, p1, fh) {
        const lerp = t => [p0[0] + (p1[0] - p0[0]) * t, p0[1] + (p1[1] - p0[1]) * t];
        const q0 = lerp(0.08), q1 = lerp(0.94), h0 = fh * 0.22, h1 = fh * 0.8;
        return [[q0[0], q0[1] - h0], [q1[0], q1[1] - h0], [q1[0], q1[1] - h1], [q0[0], q0[1] - h1]];
    }

    // --- one tower: podium + 7 floors (built / next / ghost) + crown ---
    function towerSVG(i, x, base, s, opts = {}) {
        const topic = TOPICS[i];
        const theme = TOPIC_THEME[i];
        const c = theme.color, lc = theme.light;
        const prof = PROFILES[i % PROFILES.length];
        const n = topic.lessons.length;
        const progress = getTopicProgress(i);
        const complete = progress.completed === n;
        const a0 = prof.a * s, fh = prof.fh * s, ap = a0 * 1.32, ph = 12 * s;
        const sw = Math.max(0.55, s);
        const faceL = mix(c, '#060b18', 0.8), faceR = mix(c, '#060b18', 0.68), roof = mix(c, '#060b18', 0.52);
        const rise = opts.rise || null;
        let body = '', glow = '';

        // ground glow + podium
        body += `<ellipse cx="${f1(x)}" cy="${f1(base - ap * K)}" rx="${f1(ap * 2.3)}" ry="${f1(ap * 1.15)}" fill="url(#tg-${i})" opacity="${f1(0.35 + 0.65 * progress.completed / n)}"/>`;
        const pod = box(x, base, ap, ap, ph);
        body += poly(pod.left, '#0a1222') + poly(pod.right, '#0d172b') + poly(pod.top, '#101c33');
        body += poly(strip(pod.L, pod.F, ph), lc, 'opacity=".25"') + poly(strip(pod.F, pod.R, ph), lc, 'opacity=".35"');
        glow += pline([pod.uL, pod.uF, pod.uR], lc, 1.1 * sw, 0.65);

        let supportY = pod.topY, prevA = ap, last = null, lastA = a0;
        topic.lessons.forEach((lesson, k) => {
            const a = a0 * (prof.taper[k] ?? 1);
            const b = box(x, supportY - (prevA - a) * K, a, a, fh);
            const built = !!state.completedLessons[lesson.id];
            const next = !built && k === progress.completed;
            const label = built ? 'completed' : next ? 'up next' : 'locked';
            const title = `<title>Floor ${k + 1} · ${escapeHtml(lesson.title)} (${label})</title>`;

            if (built) {
                const riseCls = rise && rise.has(lesson.id) ? ' floor-new' : '';
                body += `<g class="floor floor-built${riseCls}">${title}`
                    + poly(b.left, faceL) + poly(b.right, faceR)
                    + poly(strip(b.L, b.F, fh), lc, 'opacity=".42"') + poly(strip(b.L, b.F, fh), 'url(#fx-mull-l)')
                    + poly(strip(b.F, b.R, fh), lc, 'opacity=".62"') + poly(strip(b.F, b.R, fh), 'url(#fx-mull-r)')
                    + poly(b.top, roof)
                    + seg(b.F, b.uF, lc, 0.8 * sw, 0.75)
                    + '</g>';
                glow += pline([b.uL, b.uF, b.uR], lc, 1.7 * sw, 0.95);
                if (k === 0) glow += pline([b.L, b.F, b.R], lc, 1.3 * sw, 0.7);
            } else if (next) {
                const edge = `class="f-edge" fill="none" stroke="${lc}" stroke-width="${f1(1.2 * sw)}" stroke-opacity=".9" stroke-linejoin="round"`;
                body += `<g class="floor floor-next">${title}`
                    + poly(b.left, c, 'class="f-face" fill-opacity=".1"') + poly(b.right, c, 'class="f-face" fill-opacity=".1"')
                    + `<polygon points="${P([b.L, b.F, b.R, b.uR, b.uB, b.uL])}" ${edge}/>`
                    + `<polyline points="${P([b.uL, b.uF, b.uR])}" ${edge}/>`
                    + `<line x1="${f1(b.F[0])}" y1="${f1(b.F[1])}" x2="${f1(b.uF[0])}" y2="${f1(b.uF[1])}" ${edge}/>`
                    + '</g>';
            } else {
                const ghost = `fill="${c}" fill-opacity=".06" stroke="${lc}" stroke-opacity=".34" stroke-width="${f1(0.9 * sw)}" stroke-dasharray="${f1(4 * sw)} ${f1(3 * sw)}"`;
                body += `<g class="floor floor-ghost">${title}` + poly(b.left, null, ghost) + poly(b.right, null, ghost)
                    + (k === n - 1 ? poly(b.top, null, ghost) : '') + '</g>';
            }
            supportY = b.topY; prevA = a; last = b; lastA = a;
        });

        // crown
        const cx = x, cy = last.topY - lastA * K; // centre of the roof
        const lit = complete;
        const tipCls = lit ? 'class="beacon"' : '';
        let crown = '';
        let crownTop = cy;
        const ghostWrap = svg => lit ? svg : `<g opacity=".38">${svg}</g>`;
        if (prof.crown === 'spire') {
            const sb = box(cx, cy + lastA * 0.3 * K, lastA * 0.3, lastA * 0.3, 9 * s);
            const h = 44 * s;
            crown = poly(sb.left, faceL) + poly(sb.right, faceR) + poly(sb.top, roof)
                + seg([cx, sb.topY - lastA * 0.3 * K], [cx, sb.topY - lastA * 0.3 * K - h], lc, 1.2 * sw, 0.9)
                + `<circle cx="${f1(cx)}" cy="${f1(sb.topY - lastA * 0.3 * K - h)}" r="${f1(2.4 * sw)}" fill="${lc}" ${tipCls}/>`;
            crownTop = sb.topY - lastA * 0.3 * K - h - 3 * s;
        } else if (prof.crown === 'ring') {
            const h = 26 * s;
            crown = `<ellipse cx="${f1(cx)}" cy="${f1(cy)}" rx="${f1(lastA * 0.78)}" ry="${f1(lastA * 0.78 * K)}" fill="none" stroke="${lc}" stroke-width="${f1(1.3 * sw)}" stroke-opacity=".85"/>`
                + `<ellipse cx="${f1(cx)}" cy="${f1(cy - 8 * s)}" rx="${f1(lastA * 0.5)}" ry="${f1(lastA * 0.5 * K)}" fill="none" stroke="${c}" stroke-width="${f1(1 * sw)}" stroke-opacity=".7"/>`
                + seg([cx, cy], [cx, cy - h], lc, 1.1 * sw, 0.9)
                + `<circle cx="${f1(cx)}" cy="${f1(cy - h)}" r="${f1(2.2 * sw)}" fill="${lc}" ${tipCls}/>`;
            crownTop = cy - h - 3 * s;
        } else if (prof.crown === 'antenna') {
            const h1 = 34 * s, h2 = 22 * s, x1 = cx - lastA * 0.32, x2 = cx + lastA * 0.28;
            crown = seg([x1, cy], [x1, cy - h1], '#94a3b8', 1.1 * sw, 0.8) + seg([x2, cy - 3 * s], [x2, cy - 3 * s - h2], '#94a3b8', 1 * sw, 0.8)
                + `<circle cx="${f1(x1)}" cy="${f1(cy - h1)}" r="${f1(2 * sw)}" fill="#ff5a5a" class="blink"/>`
                + `<circle cx="${f1(x2)}" cy="${f1(cy - 3 * s - h2)}" r="${f1(1.7 * sw)}" fill="#ff5a5a" class="blink" style="animation-delay:-1.2s"/>`
                + (lit ? `<circle cx="${f1(cx)}" cy="${f1(cy - 4 * s)}" r="${f1(3 * sw)}" fill="${lc}" class="beacon"/>` : '');
            crownTop = cy - h1 - 3 * s;
        } else {
            const stem = 14 * s;
            crown = seg([cx, cy], [cx, cy - stem], lc, 1.2 * sw, 0.85)
                + `<ellipse cx="${f1(cx)}" cy="${f1(cy - stem)}" rx="${f1(11 * s)}" ry="${f1(4.5 * s)}" fill="${roof}" stroke="${lc}" stroke-width="${f1(1 * sw)}" transform="rotate(-18 ${f1(cx)} ${f1(cy - stem)})"/>`
                + `<circle cx="${f1(cx + 3 * s)}" cy="${f1(cy - stem - 7 * s)}" r="${f1(2 * sw)}" fill="${lc}" ${tipCls}/>`;
            crownTop = cy - stem - 10 * s;
        }
        crown = ghostWrap(crown);
        if (lit) {
            const bh = 260 * s;
            crown = `<rect x="${f1(cx - 3 * s)}" y="${f1(crownTop - bh)}" width="${f1(6 * s)}" height="${f1(bh)}" fill="url(#tb-${i})" opacity=".55"/>` + crown;
        }

        const svg = `<g class="tower${complete ? ' is-complete' : ''}" data-topic="${i}">${body}<g filter="url(#fx-glow)">${glow}</g>${crown}</g>`;
        return { svg, crownTop };
    }

    // --- scene layout ---
    function layout(W, H) {
        const n = TOPICS.length;
        const margin = Math.max(118, W * 0.09);
        const span = W - margin * 2;
        const jx = [0, 6, -4, 8, -6, 4, -2];
        const jy = [0, 6, -8, 4, -6, 8, -2];
        return TOPICS.map((t, i) => ({
            i,
            x: margin + span * (i / (n - 1)) + jx[i],
            base: H * (i % 2 ? 0.735 : 0.8) + jy[i],
            a: PROFILES[i].a
        }));
    }

    function winPattern(id, r, o) {
        let s = `<pattern id="${id}" width="${o.tw}" height="${o.th}" patternUnits="userSpaceOnUse"${o.transform ? ` patternTransform="${o.transform}"` : ''}>`;
        const cw = o.tw / o.cols, rh = o.th / o.rows;
        for (let row = 0; row < o.rows; row++) {
            for (let col = 0; col < o.cols; col++) {
                if (r() < o.p) {
                    const color = o.colors[Math.floor(r() * o.colors.length)];
                    const op = o.op[0] + r() * (o.op[1] - o.op[0]);
                    s += `<rect x="${f1(col * cw + (cw - o.ww) / 2)}" y="${f1(row * rh + (rh - o.wh) / 2)}" width="${o.ww}" height="${o.wh}" fill="${color}" opacity="${f1(op * 100) / 100}"/>`;
                }
            }
        }
        return s + '</pattern>';
    }

    function background(W, H, pfx, towers) {
        const r = rng(1337);
        const hz = H * 0.4;               // horizon
        const midBase = hz + 70;          // where the distant skyline meets the ground
        const defs = [], back = [], front = [];

        defs.push(`<linearGradient id="${pfx}sky" x1="0" y1="0" x2="0" y2="${hz + 40}" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#0c1227"/><stop offset=".42" stop-color="#1a2043"/><stop offset=".72" stop-color="#352f5b"/>
            <stop offset=".9" stop-color="#6a4764"/><stop offset="1" stop-color="#9b6260"/></linearGradient>`);
        defs.push(`<radialGradient id="${pfx}hz"><stop offset="0" stop-color="#f59e6b" stop-opacity=".5"/><stop offset=".5" stop-color="#b45f7a" stop-opacity=".16"/><stop offset="1" stop-color="#b45f7a" stop-opacity="0"/></radialGradient>`);
        defs.push(`<linearGradient id="${pfx}ground" x1="0" y1="${hz}" x2="0" y2="${H}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1b2139"/><stop offset=".22" stop-color="#121a2e"/><stop offset="1" stop-color="#0a101e"/></linearGradient>`);
        defs.push(`<linearGradient id="${pfx}haze" x1="0" y1="${hz - 150}" x2="0" y2="${hz + 70}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6a5a8e" stop-opacity="0"/><stop offset=".72" stop-color="#7a5f84" stop-opacity=".26"/><stop offset="1" stop-color="#3a3354" stop-opacity="0"/></linearGradient>`);
        defs.push(`<linearGradient id="${pfx}water" x1="0" y1="${H * 0.88}" x2="0" y2="${H}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d3157"/><stop offset="1" stop-color="#0a1530"/></linearGradient>`);
        defs.push(`<radialGradient id="${pfx}vig" cx=".5" cy=".42" r=".78"><stop offset=".6" stop-color="#050912" stop-opacity="0"/><stop offset="1" stop-color="#050912" stop-opacity=".6"/></radialGradient>`);
        defs.push(`<linearGradient id="${pfx}fade" x1="0" y1="${H * 0.88}" x2="0" y2="${H}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0a101d" stop-opacity="0"/><stop offset="1" stop-color="#0a101d" stop-opacity=".55"/></linearGradient>`);
        defs.push(`<clipPath id="${pfx}gclip"><rect y="${midBase + 6}" width="${W}" height="${H}"/></clipPath>`);
        defs.push(winPattern(`${pfx}wf`, r, { tw: 24, th: 28, cols: 4, rows: 5, ww: 2, wh: 2.4, p: 0.35, colors: ['#ffd7a0', '#9fc7ff', '#ffe9c7'], op: [0.2, 0.5] }));
        defs.push(winPattern(`${pfx}wm1`, r, { tw: 30, th: 36, cols: 5, rows: 6, ww: 2.6, wh: 3.2, p: 0.42, colors: ['#ffcf8a', '#ffe2b3', '#8fc2ff'], op: [0.35, 0.9] }));
        defs.push(winPattern(`${pfx}wm2`, r, { tw: 28, th: 40, cols: 4, rows: 8, ww: 3.2, wh: 2.2, p: 0.5, colors: ['#9ecbff', '#c9e2ff', '#ffd49a'], op: [0.3, 0.85] }));
        defs.push(winPattern(`${pfx}wl`, r, { tw: 24, th: 24, cols: 4, rows: 4, ww: 2.6, wh: 2.6, p: 0.45, colors: ['#ffcf8a', '#ffe7c2', '#9ecbff'], op: [0.35, 0.9], transform: 'skewY(24.7)' }));
        defs.push(winPattern(`${pfx}wr`, r, { tw: 24, th: 24, cols: 4, rows: 4, ww: 2.6, wh: 2.6, p: 0.45, colors: ['#ffcf8a', '#ffe7c2', '#9ecbff'], op: [0.35, 0.9], transform: 'skewY(-24.7)' }));

        // sky, stars, horizon glow, clouds
        back.push(`<rect width="${W}" height="${f1(hz + 60)}" fill="url(#${pfx}sky)"/>`);
        let stars = '';
        for (let k = 0; k < Math.round(W / 16); k++) {
            const tw = r() < 0.2 ? ` class="twinkle" style="animation-delay:-${f1(r() * 4)}s"` : '';
            stars += `<circle cx="${f1(r() * W)}" cy="${f1(r() * hz * 0.6)}" r="${f1(0.4 + r() * 0.9)}" fill="#e2e8f0" opacity="${f1(0.15 + r() * 0.5)}"${tw}/>`;
        }
        back.push(`<g>${stars}</g>`);
        back.push(`<ellipse cx="${f1(W * 0.56)}" cy="${f1(hz + 4)}" rx="${f1(W * 0.62)}" ry="${f1(H * 0.2)}" fill="url(#${pfx}hz)"/>`);
        let clouds = '';
        for (let k = 0; k < 8; k++) {
            clouds += `<ellipse cx="${f1(r() * W)}" cy="${f1(hz * (0.3 + r() * 0.55))}" rx="${f1(90 + r() * 220)}" ry="${f1(10 + r() * 22)}" fill="${r() < 0.5 ? '#7a6a9c' : '#4a4a78'}" opacity="${f1(0.18 + r() * 0.22)}"/>`;
        }
        back.push(`<g filter="url(#fx-blur)">${clouds}</g>`);

        // mountains
        const ridge = (baseY, amp, step, color) => {
            let d = `M0 ${f1(H * 0.6)} L0 ${f1(baseY)}`;
            let y = baseY - amp * r();
            for (let x = 0; x <= W + step; x += step) {
                const target = baseY - amp * (0.2 + 0.8 * r());
                y += (target - y) * 0.6;
                d += ` L${f1(x)} ${f1(y)}`;
            }
            return `<path d="${d} L${W} ${f1(H * 0.6)} Z" fill="${color}"/>`;
        };
        back.push(ridge(hz + 6, 100, 56, '#2a2c4d'));
        back.push(ridge(hz + 16, 58, 36, '#1e213f'));

        // ground
        back.push(`<rect y="${f1(hz + 12)}" width="${W}" height="${f1(H - hz - 12)}" fill="url(#${pfx}ground)"/>`);

        // far skyline (hazy)
        let far = '';
        const farBase = hz + 30;
        for (let x = -10; x < W + 10;) {
            const w = 8 + r() * 22;
            const h = 14 + r() * 70 * (0.5 + 0.5 * Math.sin((x / W) * Math.PI));
            far += `<rect x="${f1(x)}" y="${f1(farBase - h)}" width="${f1(w)}" height="${f1(h)}" fill="#1a2139"/>`
                + `<rect x="${f1(x)}" y="${f1(farBase - h)}" width="${f1(w)}" height="${f1(h)}" fill="url(#${pfx}wf)"/>`;
            x += w + r() * 3;
        }
        back.push(`<g>${far}</g>`);
        back.push(`<rect y="${f1(hz - 150)}" width="${W}" height="220" fill="url(#${pfx}haze)"/>`);

        // mid skyline — taller silhouettes with lit windows, spires and aviation lights
        let mid = '';
        for (let x = -20; x < W + 20;) {
            const w = 14 + r() * 30;
            const wave = Math.sin((x / W) * Math.PI * 1.3 + 0.4) * 0.5 + 0.5;
            const h = 30 + r() * (60 + 170 * Math.pow(wave, 1.4));
            const top = midBase - h;
            mid += `<rect x="${f1(x)}" y="${f1(top)}" width="${f1(w)}" height="${f1(h)}" fill="${r() < 0.5 ? '#121a2e' : '#151e35'}"/>`;
            mid += `<rect x="${f1(x + 1.5)}" y="${f1(top + 4)}" width="${f1(w - 3)}" height="${f1(h - 8)}" fill="url(#${pfx}${r() < 0.5 ? 'wm1' : 'wm2'})" opacity="${f1(0.45 + r() * 0.5)}"/>`;
            const roll = r();
            if (roll < 0.16) {
                const sh = 10 + r() * 30;
                mid += seg([x + w / 2, top], [x + w / 2, top - sh], '#3a4868', 1.2)
                    + `<circle cx="${f1(x + w / 2)}" cy="${f1(top - sh)}" r="1.6" fill="#ff4d4d" class="blink" style="animation-delay:-${f1(r() * 3)}s"/>`;
            } else if (roll < 0.38) {
                mid += `<rect x="${f1(x)}" y="${f1(top)}" width="${f1(w)}" height="1.6" fill="${r() < 0.5 ? '#ffcf8a' : '#7cc4ff'}" opacity=".75"/>`;
            }
            x += w + r() * 6 - 2;
        }
        back.push(`<g>${mid}</g>`);

        // roads on an isometric grid, plus streetlights and light trails
        let roads = '';
        const span = W * K;
        const lamps = 'stroke-dasharray="0.1 34"';
        for (let y0 = midBase - span; y0 < H + span; y0 += 128) {
            roads += seg([0, y0], [W, y0 + span], '#18223a', 3) + seg([0, y0 - 3], [W, y0 + span - 3], '#ffc46b', 1.7, 0.35, lamps);
        }
        for (let y0 = midBase; y0 < H + span * 2; y0 += 128) {
            roads += seg([0, y0], [W, y0 - span], '#18223a', 3) + seg([0, y0 - 3], [W, y0 - span - 3], '#9ecbff', 1.5, 0.3, lamps);
        }
        const avenues = [
            [[0, midBase + 150 - span * 0.1], [W, midBase + 150 + span * 0.9]],
            [[0, H + span * 0.35], [W, H - span * 0.65]]
        ];
        let trails = '';
        avenues.forEach(([p, q], k) => {
            roads += seg(p, q, '#1f2a45', 5) + seg(p, q, '#ffc46b', 2.4, 0.7, 'stroke-dasharray="0.1 26"');
            trails += seg(p, q, '#fb923c', 1.8, 0.85, `class="trail" stroke-dasharray="20 80" style="animation-delay:-${k * 2}s"`);
            trails += seg(p, q, '#e0f2fe', 1.6, 0.7, 'class="trail rev" stroke-dasharray="14 86"');
        });
        back.push(`<g clip-path="url(#${pfx}gclip)">${roads}${trails}</g>`);

        // water in the lower-right corner
        const waterTop = x => {
            if (x < W * 0.44) return H + 1;
            const t = Math.min(1, (x - W * 0.44) / (W * 0.56));
            return H - H * 0.13 * (1 - Math.pow(1 - t, 2.2));
        };
        const wpts = [];
        for (let x = W * 0.44; x <= W + 1; x += 20) wpts.push([x, waterTop(x)]);
        let water = `<polygon points="${P([...wpts, [W, H], [W * 0.44, H]])}" fill="url(#${pfx}water)"/>`;
        water += pline(wpts, '#3b5b8f', 1.4, 0.55) + pline(wpts.map(p => [p[0], p[1] - 3]), '#ffd28a', 2.2, 0.6, 'stroke-dasharray="0.1 14"');
        towers.forEach(t => {
            if (t.x > W * 0.52) {
                const top = waterTop(t.x);
                if (top < H) water += `<rect x="${f1(t.x - t.a * 0.6)}" y="${f1(top + 4)}" width="${f1(t.a * 1.2)}" height="${f1(H - top)}" fill="${getTopicColor(t.i)}" opacity=".16" filter="url(#fx-soft)"/>`;
            }
        });
        for (let k = 0; k < 22; k++) {
            const x = W * 0.52 + r() * W * 0.48;
            const top = waterTop(x);
            if (top >= H - 6) continue;
            const y = top + 6 + r() * (H - top - 8);
            water += seg([x, y], [x + 10 + r() * 26, y], '#7c9be0', 1, 0.3, `class="shimmer" style="animation-delay:-${f1(r() * 5)}s"`);
        }
        back.push(`<g>${water}</g>`);

        // isometric blocks + trees scattered on the ground (kept clear of the hero towers)
        const items = [];
        const nearTower = (x, y, pad, above, below) => towers.some(t => Math.abs(x - t.x) < t.a * 1.45 + pad && y > t.base - above && y < t.base + below);
        for (let k = 0; k < Math.round(W / 6); k++) {
            const y = midBase + 26 + Math.pow(r(), 0.85) * (H - midBase - 26);
            const x = r() * W;
            const depth = (y - midBase) / (H - midBase);
            const sc = 0.45 + 0.75 * depth;
            const a = (7 + r() * 14) * sc;
            const h = (8 + r() * (r() < 0.2 ? 70 : 34)) * sc;
            const kind = r();
            if (y > waterTop(x) - 10 || nearTower(x, y, a + 10, 150, 70)) continue;
            items.push({ type: 'block', x, y, a, h, kind });
        }
        for (let k = 0; k < Math.round(W / 4.5); k++) {
            const y = midBase + 34 + r() * (H - midBase - 34);
            const x = r() * W;
            const sc = 0.45 + 0.75 * ((y - midBase) / (H - midBase));
            if (y > waterTop(x) - 6 || nearTower(x, y, 8, 130, 40)) continue;
            items.push({ type: 'tree', x, y, rad: (2.2 + r() * 3.2) * sc, shade: r() });
        }
        items.sort((p, q) => p.y - q.y);
        const frontLine = H * 0.735 + 70;
        items.forEach(it => {
            let svg;
            if (it.type === 'block') {
                const b = box(it.x, it.y, it.a, it.a * (0.7 + 0.6 * ((it.kind * 7) % 1)), it.h);
                const shade = it.kind < 0.5 ? ['#141d33', '#18233c', '#1f2c48'] : ['#111a2d', '#162037', '#1b2741'];
                svg = poly(b.left, shade[0]) + poly(b.right, shade[1]) + poly(b.top, shade[2]);
                if (it.h > 10) svg += poly(b.left, `url(#${pfx}wl)`, 'opacity=".75"') + poly(b.right, `url(#${pfx}wr)`, 'opacity=".9"');
            } else {
                svg = `<circle cx="${f1(it.x)}" cy="${f1(it.y - it.rad)}" r="${f1(it.rad)}" fill="${it.shade < 0.5 ? '#0f2a22' : '#12321f'}"/>`
                    + `<circle cx="${f1(it.x - it.rad * 0.3)}" cy="${f1(it.y - it.rad * 1.3)}" r="${f1(it.rad * 0.5)}" fill="#1d4a33" opacity=".55"/>`;
            }
            (it.y > frontLine ? front : back).push(svg);
        });

        const overlay = `<rect width="${W}" height="${H}" fill="url(#${pfx}vig)" pointer-events="none"/>`
            + `<rect y="${f1(H * 0.88)}" width="${W}" height="${f1(H * 0.12)}" fill="url(#${pfx}fade)" pointer-events="none"/>`;
        return { defs: defs.join(''), back: back.join(''), front: front.join(''), overlay };
    }

    function towersLayer(lay, opts) {
        const geo = [];
        const ordered = [...lay].sort((p, q) => p.base - q.base);
        const svg = ordered.map(t => {
            const out = towerSVG(t.i, t.x, t.base, 1, opts);
            geo[t.i] = { x: t.x, crownTop: out.crownTop };
            return out.svg;
        }).join('');
        return { svg, geo };
    }

    function labelHTML(i) {
        const topic = TOPICS[i];
        const p = getTopicProgress(i);
        const done = p.completed === p.total;
        return `<button type="button" class="tower-label" data-topic="${i}" style="--c:${getTopicColor(i)}"
                    aria-label="${escapeHtml(topic.name)} tower: ${p.completed} of ${p.total} floors built. Open lessons">
            <span class="tl-icon">${topic.icon}</span>
            <span class="tl-text">
                <span class="tl-name">${escapeHtml(topic.shortName)}</span>
                <span class="tl-sub">${done ? '<span class="tl-done">Tower complete</span>' : `${p.completed} / ${p.total} floors`}</span>
                <span class="tl-bar"><i style="width:${p.percent}%"></i></span>
            </span>
        </button>`;
    }

    const scenes = new Map();
    const observer = typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(entries => entries.forEach(e => schedule(e.target)))
        : null;

    function schedule(el) {
        const st = scenes.get(el);
        if (!st) return;
        clearTimeout(st.timer);
        st.timer = setTimeout(() => {
            const w = el.clientWidth, h = el.clientHeight;
            if (!st.W || Math.abs(w - st.cw) > 4 || Math.abs(h - st.ch) > 4) build(el);
            else position(el);
        }, 90);
    }

    function build(el, opts = {}) {
        const st = scenes.get(el);
        const w = el.clientWidth, h = el.clientHeight;
        if (w < 40 || h < 40) return;
        const H = VIEW_H;
        const W = Math.round(H * w / h);
        const pfx = `${el.id}-`;
        const lay = layout(W, H);
        const bg = background(W, H, pfx, lay);
        const tl = towersLayer(lay, opts);
        Object.assign(st, { W, H, cw: w, ch: h, lay, geo: tl.geo });
        el.innerHTML = `<svg class="city-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
                <defs>${bg.defs}</defs>${bg.back}<g class="towers">${tl.svg}</g>${bg.front}${bg.overlay}
            </svg>
            <div class="city-labels">${TOPICS.map((t, i) => labelHTML(i)).join('')}</div>`;
        position(el);
    }

    // Float each label just above its tower's crown, nudging neighbours apart so none overlap
    function position(el) {
        const st = scenes.get(el);
        if (!st || !st.W) return;
        const cw = el.clientWidth;
        const scale = cw / st.W;
        el.classList.toggle('is-compact', scale < 0.72);
        const items = $$('.tower-label', el).map(lb => {
            const g = st.geo[+lb.dataset.topic];
            return { lb, x: g.x * scale, crown: g.crownTop * scale, w: lb.offsetWidth, h: lb.offsetHeight };
        });
        items.forEach(it => { it.top = it.crown - it.h - 16; });
        const byX = [...items].sort((a, b) => a.x - b.x);
        const overlapX = (a, b) => Math.abs(a.x - b.x) < (a.w + b.w) / 2 + 8;
        for (let pass = 0; pass < 3; pass++) {
            for (let k = 0; k < byX.length - 1; k++) {
                const A = byX[k], B = byX[k + 1];
                if (!overlapX(A, B)) continue;
                const hi = A.top <= B.top ? A : B, lo = hi === A ? B : A;
                if (hi.top + hi.h + 8 > lo.top) hi.top = lo.top - hi.h - 8;
            }
        }
        items.forEach(it => { it.top = Math.max(8, it.top); });
        for (let k = 0; k < byX.length - 1; k++) {
            const A = byX[k], B = byX[k + 1];
            if (!overlapX(A, B)) continue;
            const hi = A.top <= B.top ? A : B, lo = hi === A ? B : A;
            lo.top = Math.max(lo.top, hi.top + hi.h + 8);
        }
        items.forEach(it => {
            const left = Math.min(Math.max(it.x, it.w / 2 + 6), cw - it.w / 2 - 6);
            it.lb.style.left = `${left}px`;
            it.lb.style.top = `${it.top}px`;
            it.lb.style.setProperty('--stem', `${Math.max(0, it.crown - (it.top + it.h) - 2)}px`);
        });
    }

    function mount(el) {
        if (!el) return;
        if (!scenes.has(el)) {
            scenes.set(el, {});
            if (observer) observer.observe(el);
        }
        build(el);
    }

    function refresh(opts = {}) {
        scenes.forEach((st, el) => {
            if (!st.W) return;
            const g = $('g.towers', el);
            const labels = $('.city-labels', el);
            if (!g || !labels) return build(el, opts);
            const tl = towersLayer(st.lay, opts);
            st.geo = tl.geo;
            g.innerHTML = tl.svg;
            labels.innerHTML = TOPICS.map((t, i) => labelHTML(i)).join('');
            position(el);
        });
    }

    // Small single-tower night scene used by the learning-track cards
    function thumbSVG(i) {
        const W = 160, H = 120;
        const r = rng(400 + i * 97);
        let s = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">`;
        s += `<rect width="${W}" height="${H}" fill="url(#tsky)"/>`;
        for (let x = -4; x < W;) {
            const w = 6 + r() * 12, h = 14 + r() * 42;
            s += `<rect x="${f1(x)}" y="${f1(H * 0.8 - h)}" width="${f1(w)}" height="${f1(h)}" fill="#141c33"/>`
                + `<rect x="${f1(x)}" y="${f1(H * 0.8 - h)}" width="${f1(w)}" height="${f1(h)}" fill="url(#twin)" opacity=".75"/>`;
            x += w + r() * 2;
        }
        s += `<rect y="${f1(H * 0.8)}" width="${W}" height="${f1(H * 0.2)}" fill="#0c1324"/>`;
        const p = PROFILES[i];
        const total = 12 + p.fh * 7 + 50 + p.a * K;
        const sc = (H * 0.93 - 6) / total;
        s += towerSVG(i, W / 2, H * 0.95, sc).svg;
        return s + '</svg>';
    }

    // Bird's-eye isometric diorama for the City Map widget and modal
    // [u, v] on the platform — every tower gets its own screen column so markers never cover a neighbour
    const MAP_POS = [[-0.75, 0.75], [-0.85, 0.15], [0.15, 0.65], [-0.45, -0.45], [0.6, 0.1], [0.2, -0.8], [0.8, -0.7]];
    function miniMapSVG(opts = {}) {
        const W = 200, H = 176, cx = 100, cy = 104, A = 86, KM = 0.5;
        const pt = (u, v) => [cx + (u - v) * A / 2, cy + (u + v) * A * KM / 2];
        let s = `<svg viewBox="6 8 188 156" aria-hidden="true" focusable="false"><g class="mm-zoom" style="transform:scale(${opts.zoom || 1})">`;
        s += poly([[cx - A, cy], [cx, cy + A * KM], [cx, cy + A * KM + 9], [cx - A, cy + 9]], '#0a1324')
            + poly([[cx, cy + A * KM], [cx + A, cy], [cx + A, cy + 9], [cx, cy + A * KM + 9]], '#0e1a31')
            + poly([[cx - A, cy], [cx, cy + A * KM], [cx + A, cy], [cx, cy - A * KM]], '#111e37', 'stroke="#27406a" stroke-width="1"');
        s += poly([pt(0.7, -1), pt(1, -1), pt(1, -0.55), pt(0.82, -0.62)], '#16325a', 'opacity=".9"');
        for (const g of [-0.33, 0.33]) {
            s += seg(pt(g, -1), pt(g, 1), '#1f3456', 2) + seg(pt(-1, g), pt(1, g), '#1f3456', 2);
            s += seg(pt(g, -1), pt(g, 1), '#ffc46b', 1, 0.5, 'stroke-dasharray="0.1 7"');
        }
        const r = rng(77);
        for (let k = 0; k < 46; k++) {
            const q = pt(r() * 1.9 - 0.95, r() * 1.9 - 0.95);
            s += `<circle cx="${f1(q[0])}" cy="${f1(q[1])}" r="${f1(1.2 + r() * 1.4)}" fill="#12402b" opacity=".85"/>`;
        }
        const order = MAP_POS.map((p, i) => ({ i, u: p[0], v: p[1] })).sort((a, b) => (a.u + a.v) - (b.u + b.v));
        order.forEach(({ i, u, v }) => {
            const theme = TOPIC_THEME[i];
            const c = theme.color;
            const topic = TOPICS[i];
            const [x, y] = pt(u, v);
            const a = 6.5, fh = 4.2;
            let t = '', yb = y + a * K;
            topic.lessons.forEach(l => {
                const b = box(x, yb, a, a, fh);
                if (state.completedLessons[l.id]) {
                    t += poly(b.left, mix(c, '#050a14', 0.45)) + poly(b.right, mix(c, '#050a14', 0.2)) + poly(b.top, theme.light);
                } else {
                    t += poly(b.left, c, 'fill-opacity=".06" stroke="' + c + '" stroke-opacity=".35" stroke-width=".6"')
                        + poly(b.right, c, 'fill-opacity=".06" stroke="' + c + '" stroke-opacity=".35" stroke-width=".6"');
                }
                yb = b.topY;
            });
            const top = yb - a * K * 2;
            const my = top - 14;
            t += seg([x, top], [x, my + 8], c, 0.8, 0.7);
            t += `<circle cx="${f1(x)}" cy="${f1(my)}" r="8.5" fill="#0a1224" stroke="${c}" stroke-width="1.4"/>`
                + `<use href="#i-${topic.glyph}" x="${f1(x - 5)}" y="${f1(my - 5)}" width="10" height="10" style="color:${c}" class="mm-ico" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`;
            const attrs = opts.interactive ? ` role="button" tabindex="0" aria-label="${escapeHtml(topic.name)}: ${getTopicProgress(i).completed} of 7 floors"` : '';
            s += `<g class="mm-tower" data-topic="${i}"${attrs}><title>${escapeHtml(topic.shortName)} · ${getTopicProgress(i).completed}/7 floors</title>${t}</g>`;
        });
        return s + '</g></svg>';
    }

    return { mount, refresh, position, thumbSVG, miniMapSVG, scenes };
})();

// Global paint servers shared by every tower drawing (hero, thumbnails, map)
function injectSharedDefs() {
    const defs = $('.sprite defs');
    if (!defs || $('#tsky')) return;
    let s = '<linearGradient id="tsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1328"/><stop offset=".6" stop-color="#28294f"/><stop offset="1" stop-color="#553d5e"/></linearGradient>';
    s += '<pattern id="twin" width="12" height="14" patternUnits="userSpaceOnUse">'
        + '<rect x="2" y="2" width="2" height="2.4" fill="#ffd49a" opacity=".6"/><rect x="8" y="2" width="2" height="2.4" fill="#9ecbff" opacity=".35"/>'
        + '<rect x="8" y="9" width="2" height="2.4" fill="#ffe2b3" opacity=".55"/></pattern>';
    TOPIC_THEME.forEach((th, i) => {
        s += `<radialGradient id="tg-${i}"><stop offset="0" stop-color="${th.color}" stop-opacity=".6"/><stop offset=".55" stop-color="${th.color}" stop-opacity=".16"/><stop offset="1" stop-color="${th.color}" stop-opacity="0"/></radialGradient>`;
        s += `<linearGradient id="tb-${i}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${th.light}" stop-opacity=".6"/><stop offset="1" stop-color="${th.color}" stop-opacity="0"/></linearGradient>`;
    });
    defs.insertAdjacentHTML('beforeend', s);
}

// --- Rendering ---

const ACTIVITY_ICONS = { complete: 'check-circle', start: 'play-circle', streak: 'trophy' };
const ui = {
    memoryIndex: 0,
    memoryRevealed: false,
    flashFilter: 'all',
    flipped: new Set(),
    mapZoom: 1,
    pendingRise: new Set()
};

function setRing(el, percent) {
    const fill = $('.ring-fill', el);
    const c = 2 * Math.PI * 27;
    fill.style.strokeDasharray = `${c}`;
    fill.style.strokeDashoffset = `${c - (Math.min(100, Math.max(0, percent)) / 100) * c}`;
}

function renderTowers(opts = {}) {
    const rise = opts.rise ? ui.pendingRise : null;
    City.refresh({ rise });

    // learning-track cards (home)
    $('#trackRow').innerHTML = TOPICS.map(topic => {
        const p = getTopicProgress(topic.id);
        return `<button type="button" class="track-card" data-topic="${topic.id}" style="--c:${getTopicColor(topic.id)}"
                    aria-label="${escapeHtml(topic.name)}: ${p.completed} of ${p.total} floors">
            <span class="track-thumb">${City.thumbSVG(topic.id)}<span class="track-badge">${topic.icon}</span></span>
            <span class="track-info">
                <span class="track-name">${escapeHtml(topic.shortName)}</span>
                <span class="track-floors">${p.completed} / ${p.total} floors</span>
                <span class="bar"><i style="width:${p.percent}%"></i></span>
            </span>
        </button>`;
    }).join('');

    renderCityMap();
}

function renderCityMap() {
    $('#cityMap').innerHTML = City.miniMapSVG({ zoom: ui.mapZoom });
}

function renderSidebar() {
    const overall = getOverallProgress();

    // Hero overlay
    setRing($('#overallRing'), overall.percent);
    $('#overallRing').setAttribute('aria-label', `Overall progress ${overall.percent}%`);
    $('#progressPercent').textContent = `${overall.percent}%`;
    $('#overallPercentBig').textContent = `${overall.percent}%`;
    $('#unlockedFloors').textContent = overall.completed;
    $('#totalFloors').textContent = overall.total;

    // Study overview
    const range = $('#rangeSelect').value;
    const minutes = getStudyMinutesInRange(range);
    const studyPct = TOTAL_MINUTES ? Math.round((minutes / TOTAL_MINUTES) * 100) : 0;
    setRing($('#studyRing'), studyPct);
    $('#studyRing').setAttribute('aria-label', `Study progress ${studyPct}%`);
    $('#studyPercent').textContent = `${studyPct}%`;
    $('#studyHours').textContent = formatHours(minutes);
    $('#studyHoursTotal').textContent = formatHours(TOTAL_MINUTES);
    $('#dayStreak').textContent = getEffectiveStreak();
    $('#studyDays').textContent = getStudyDays(range);
    $('#towersBuilt').textContent = `${getTowersBuilt()}/${TOPICS.length}`;

    // Weakness panel
    const weaknesses = getWeaknesses();
    $('#weaknessList').innerHTML = weaknesses.length === 0
        ? `<li class="weak-done">${ico('trophy')} Every tower is complete — nothing left to shore up.</li>`
        : weaknesses.map(weakItem).join('');
}

function weaknessGradient(percent) {
    if (percent < 34) return 'linear-gradient(90deg,#dc2626,#f87171)';
    if (percent < 60) return 'linear-gradient(90deg,#ea580c,#fb923c)';
    if (percent < 85) return 'linear-gradient(90deg,#f59e0b,#fcd34d)';
    return 'linear-gradient(90deg,#65a30d,#a3e635)';
}

function weakItem(w) {
    return `<li><button type="button" class="weak-item" data-topic="${w.topic.id}" aria-label="${escapeHtml(w.topic.name)}: ${w.percent}% complete. Open lessons">
        <span class="weak-row"><span>${escapeHtml(w.topic.shortName)}</span><span>${w.percent}%</span></span>
        <span class="weak-bar"><i style="width:${w.percent}%;background:${weaknessGradient(w.percent)}"></i></span>
    </button></li>`;
}

function renderMemoryCards() {
    // Home widget: one card at a time
    const card = MEMORY_CARDS[ui.memoryIndex];
    const topic = TOPICS[card.topic];
    const shown = ui.memoryRevealed;
    const hadFocus = document.activeElement && document.activeElement.closest('#memoryCard')
        ? document.activeElement.dataset.mc || 'reveal' : null;
    $('#memoryCard').innerHTML = `
        <div class="mc-top">
            <span class="mc-ico">${ico('sparkle')}</span>
            <div>
                <p class="mc-topic">${escapeHtml(topic.shortName)}</p>
                <p class="mc-q">${escapeHtml(card.title)}</p>
            </div>
        </div>
        <p class="mc-a${shown ? '' : ' is-hidden'}" id="mcAnswer"${shown ? '' : ' aria-hidden="true"'}>${escapeHtml(card.body)}</p>
        <div class="mc-foot">
            <button type="button" class="mc-reveal" data-mc="reveal" aria-expanded="${shown}" aria-controls="mcAnswer">${shown ? 'Hide Answer' : 'Show Answer'}</button>
            <div class="mc-nav">
                <span class="mc-count">${ui.memoryIndex + 1} / ${MEMORY_CARDS.length}</span>
                <button type="button" class="mc-btn" data-mc="prev" aria-label="Previous card">${ico('chevron-left')}</button>
                <button type="button" class="mc-btn" data-mc="next" aria-label="Next card">${ico('chevron-right')}</button>
            </div>
        </div>`;
    if (hadFocus) {
        const again = $(`#memoryCard [data-mc="${hadFocus}"]`);
        if (again) again.focus();
    }

    // Flashcards page
    const filters = [{ id: 'all', label: 'All cards' }, ...TOPICS.map(t => ({ id: String(t.id), label: t.shortName, c: getTopicColor(t.id) }))];
    $('#flashFilter').innerHTML = filters.map(f =>
        `<button type="button" class="chip" data-filter="${f.id}" aria-pressed="${ui.flashFilter === f.id}"${f.c ? ` style="--c:${f.c}"` : ''}>${f.c ? '<span class="dot"></span>' : ''}${escapeHtml(f.label)}</button>`
    ).join('');

    $('#memoryCards').innerHTML = MEMORY_CARDS.map((c, idx) => ({ c, idx }))
        .filter(({ c }) => ui.flashFilter === 'all' || String(c.topic) === ui.flashFilter)
        .map(({ c, idx }) => {
            const flipped = ui.flipped.has(idx);
            return `<div class="flash${flipped ? ' is-flipped' : ''}" id="card-${idx}" style="--c:${getTopicColor(c.topic)}">
                <button type="button" class="flash-inner" data-card="${idx}" aria-pressed="${flipped}" aria-label="${escapeHtml(c.title)}. ${flipped ? escapeHtml(c.body) : 'Press to reveal the answer.'}">
                    <span class="flash-face flash-front" aria-hidden="true">
                        <span class="flash-topic"><span class="dot"></span>${escapeHtml(TOPICS[c.topic].shortName)}</span>
                        <span class="flash-title">${escapeHtml(c.title)}</span>
                        <span class="flash-hint">${ico('reset')} Tap to flip</span>
                    </span>
                    <span class="flash-face flash-back" aria-hidden="true">
                        <span class="flash-topic"><span class="dot"></span>${escapeHtml(c.title)}</span>
                        <span class="flash-body">${escapeHtml(c.body)}</span>
                    </span>
                </button>
            </div>`;
        }).join('');
}

function renderGlossary() {
    $('#keyTerms').innerHTML = GLOSSARY.slice(0, 8).map((g, idx) =>
        `<button type="button" class="chip" data-term="${idx}">${escapeHtml(g.term)}</button>`
    ).join('');

    $('#glossaryGrid').innerHTML = GLOSSARY.map((item, idx) => `
        <article class="panel gl-item" id="term-${idx}">
            <h3 class="gl-term">${escapeHtml(item.term)}</h3>
            <p class="gl-def">${escapeHtml(item.def)}</p>
        </article>
    `).join('');
}

// Shorter, scannable wording for the stored activity text (the stored text is unchanged)
function describeActivity(item) {
    const raw = String(item.text).replace(/^\p{Extended_Pictographic}\s*/u, '');
    let m = raw.match(/^Completed "(.+)" in (.+)$/);
    if (m) return { title: `Completed: ${m[1]}`, meta: m[2] };
    m = raw.match(/^Completed entire (.+) tower!$/);
    if (m) {
        const topic = TOPICS.find(t => t.name === m[1]);
        return { title: `Tower complete: ${topic ? topic.shortName : m[1]}`, meta: 'All 7 floors built' };
    }
    return { title: raw, meta: '' };
}

function activityItem(item) {
    const d = describeActivity(item);
    return `<li class="activity-item${item.type === 'streak' ? ' is-trophy' : ''}">
        ${ico(ACTIVITY_ICONS[item.type] || ACTIVITY_ICONS.start)}
        <div class="activity-body"><span class="activity-text" title="${escapeHtml(d.title)}">${escapeHtml(d.title)}</span><span class="activity-time">${formatTime(item.timestamp)}${d.meta ? ` · ${escapeHtml(d.meta)}` : ''}</span></div>
    </li>`;
}

function renderActivity() {
    const empty = `<li class="empty">No activity yet. Complete a lesson to lay your first floor.<br>
        <button type="button" class="link link-wrap" data-topic="0">Start with “${escapeHtml(TOPICS[0].lessons[0].title)}”</button></li>`;
    $('#activityFeed').innerHTML = state.activityLog.length ? state.activityLog.slice(0, 4).map(activityItem).join('') : empty;
    $('#activityFeedFull').innerHTML = state.activityLog.length ? state.activityLog.map(activityItem).join('') : empty;
}

function getNudges() {
    const overall = getOverallProgress();
    const nudges = [];
    const streak = getEffectiveStreak();
    const studiedToday = state.lastStudyDate === getToday();
    if (overall.completed === overall.total) {
        nudges.push({ icon: 'trophy', cls: 'ic-yellow', html: 'Every tower is complete. <strong>Your city is finished!</strong>' });
        return nudges;
    }
    if (overall.completed === 0) {
        nudges.push({ icon: 'sparkle', cls: 'ic-green', html: `Lay your first floor: <strong>${escapeHtml(TOPICS[0].lessons[0].title)}</strong>`, topic: 0 });
    } else if (!studiedToday && streak > 0) {
        nudges.push({ icon: 'flame', cls: 'ic-orange', html: `Keep your <strong>${streak}-day streak</strong> alive — finish a lesson today.` });
    } else if (studiedToday) {
        nudges.push({ icon: 'check-circle', cls: 'ic-green', html: `You studied today. Streak: <strong>${streak} day${streak === 1 ? '' : 's'}</strong>.` });
    }
    const weakest = getWeaknesses()[0];
    if (weakest) {
        const next = getNextLesson(weakest.topic.id);
        if (next) nudges.push({ icon: weakest.topic.glyph, color: getTopicColor(weakest.topic.id), html: `Weakest tower: <strong>${escapeHtml(weakest.topic.shortName)}</strong> — next up “${escapeHtml(next.title)}”.`, topic: weakest.topic.id });
    }
    return nudges;
}

function renderNotifications() {
    const nudges = getNudges();
    $('#notifList').innerHTML = nudges.map(n => {
        const inner = `<svg class="i ${n.cls || ''}" aria-hidden="true"${n.color ? ` style="color:${n.color}"` : ''}><use href="#i-${n.icon}"/></svg><span>${n.html}</span>`;
        return `<li>${n.topic !== undefined ? `<button type="button" class="notif-item" data-topic="${n.topic}">${inner}</button>` : `<div class="notif-item">${inner}</div>`}</li>`;
    }).join('');
    const overall = getOverallProgress();
    $('#notifDot').hidden = state.lastStudyDate === getToday() || overall.completed === overall.total;
}

function renderProfile() {
    const name = (state.profileName || DEFAULT_NAME).trim() || DEFAULT_NAME;
    const words = name.split(/\s+/).filter(Boolean);
    const initials = name === DEFAULT_NAME ? 'AR'
        : (words.length > 1 ? words[0][0] + words[words.length - 1][0] : name.slice(0, 2)).toUpperCase();
    $('#profileName').textContent = name;
    $('#avatar').textContent = initials;
    $('#nameInput').value = name;
}

// --- Page views ---

function renderTrackView() {
    const overall = getOverallProgress();
    $('#trackSummary').innerHTML = `
        <span class="pill">${ico('building')}<strong>${overall.completed}</strong> / ${overall.total} floors</span>
        <span class="pill">${ico('trophy')}<strong>${getTowersBuilt()}</strong> / ${TOPICS.length} towers</span>`;

    $('#trackView').innerHTML = TOPICS.map(topic => {
        const p = getTopicProgress(topic.id);
        const lessons = topic.lessons.map((lesson, i) => {
            const done = !!state.completedLessons[lesson.id];
            const next = !done && i === p.completed;
            const cls = done ? 'is-done' : next ? 'is-next' : 'is-locked';
            const action = done
                ? '<span class="status status-done">Done</span>'
                : next
                    ? `<button type="button" class="btn btn-primary btn-sm" data-complete="${lesson.id}" data-topic="${topic.id}">${ico('check')}Complete</button>`
                    : `<span class="status status-locked">${ico('lock')}Locked</span>`;
            return `<li class="tt-lesson ${cls}">
                <span class="tt-step">${done ? ico('check') : i + 1}</span>
                <button type="button" class="tt-lesson-main link-reset" data-topic="${topic.id}" data-lesson="${lesson.id}">
                    <span class="tt-lesson-title">${escapeHtml(lesson.title)}</span>
                    <span class="tt-lesson-meta">${escapeHtml(lesson.duration)} · ${escapeHtml(lesson.desc)}</span>
                </button>
                ${action}
            </li>`;
        }).join('');
        return `<article class="panel tt-card" style="--c:${getTopicColor(topic.id)}">
            <header class="tt-head">
                <div class="tt-thumb">${City.thumbSVG(topic.id)}</div>
                <div class="tt-head-text">
                    <h3 class="tt-title">${escapeHtml(topic.name)}</h3>
                    <p class="tt-desc">${escapeHtml(topic.description)}</p>
                    <div class="tt-meta"><span>${p.completed} / ${p.total} floors</span><span class="bar"><i style="width:${p.percent}%"></i></span><span>${p.percent}%</span></div>
                </div>
            </header>
            <ol class="tt-lessons">${lessons}</ol>
        </article>`;
    }).join('');
}

function renderStatsView() {
    const overall = getOverallProgress();
    const kpis = [
        { icon: 'stats', cls: 'ic-green', label: 'Overall progress', value: `${overall.percent}<small>%</small>` },
        { icon: 'building', cls: 'ic-green', label: 'Floors unlocked', value: `${overall.completed}<small>/ ${overall.total}</small>` },
        { icon: 'clock', cls: '', label: 'Study hours', value: `${formatHours(state.studyMinutes)}<small>/ ${formatHours(TOTAL_MINUTES)} h</small>` },
        { icon: 'calendar', cls: 'ic-green', label: 'Day streak', value: `${getEffectiveStreak()}<small>${getEffectiveStreak() === 1 ? 'day' : 'days'}</small>` },
        { icon: 'flame', cls: 'ic-orange', label: 'Total study days', value: `${getStudyDays('all')}` },
        { icon: 'star', cls: 'ic-yellow', label: 'Towers built', value: `${getTowersBuilt()}<small>/ ${TOPICS.length}</small>` }
    ];
    $('#kpiRow').innerHTML = kpis.map(k => `<div class="panel kpi">
        <p class="kpi-label"><svg class="i ${k.cls}" aria-hidden="true"><use href="#i-${k.icon}"/></svg>${k.label}</p>
        <p class="kpi-value">${k.value}</p>
    </div>`).join('');

    $('#towerBars').innerHTML = TOPICS.map(t => {
        const p = getTopicProgress(t.id);
        return `<button type="button" class="hbar" data-topic="${t.id}" style="--c:${getTopicColor(t.id)}" aria-label="${escapeHtml(t.name)}: ${p.completed} of ${p.total} lessons, ${p.percent}%">
            <span class="hbar-name"><span class="dot"></span>${escapeHtml(t.shortName)}</span>
            <span class="hbar-track"><i style="width:${p.percent}%"></i></span>
            <span class="hbar-val">${p.completed}/${p.total} · ${p.percent}%</span>
        </button>`;
    }).join('');

    const all = TOPICS.map(t => ({ topic: t, ...getTopicProgress(t.id) })).sort((a, b) => a.percent - b.percent);
    $('#weaknessListFull').innerHTML = all.map(weakItem).join('');

    renderDailyChart();
}

function renderDailyChart() {
    const el = $('#dailyChart');
    const days = [];
    for (let d = 13; d >= 0; d--) {
        const dt = new Date();
        dt.setHours(0, 0, 0, 0);
        dt.setDate(dt.getDate() - d);
        days.push({ key: toDateKey(dt), date: dt, mins: 0 });
    }
    Object.entries(state.lessonTimestamps || {}).forEach(([id, ts]) => {
        if (!state.completedLessons[id]) return;
        const day = days.find(d => d.key === toDateKey(new Date(ts)));
        const found = findLesson(id);
        if (day && found) day.mins += parseMinutes(found.lesson.duration);
    });

    const W = Math.max(280, el.clientWidth || 520), H = 220;
    const ml = 36, mr = 6, mt = 18, mb = 26;
    const max = Math.max(0, ...days.map(d => d.mins));
    const step = max > 240 ? 120 : max > 120 ? 60 : 30;
    const top = Math.max(step * 2, Math.ceil(max / step) * step);
    const plotH = H - mt - mb;
    const band = (W - ml - mr) / days.length;
    const colW = Math.min(24, band * 0.62);
    const y = v => mt + plotH - (v / top) * plotH;
    const fmtDay = d => d.date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });

    let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Minutes studied per day over the last 14 days">`;
    [0, top / 2, top].forEach(v => {
        svg += `<line class="dc-grid" x1="${ml}" x2="${W - mr}" y1="${y(v)}" y2="${y(v)}"/>`;
        svg += `<text class="dc-axis" x="${ml - 8}" y="${y(v) + 4}" text-anchor="end">${v}</text>`;
    });
    const peak = days.reduce((best, d, i) => (d.mins > (days[best]?.mins || 0) ? i : best), -1);
    days.forEach((d, i) => {
        const cx = ml + band * i + band / 2;
        const x0 = cx - colW / 2;
        if (d.mins > 0) {
            const yt = y(d.mins), base = y(0), rr = Math.min(4, (base - yt) / 2);
            svg += `<rect class="dc-hit" data-i="${i}" x="${ml + band * i}" y="${mt}" width="${band}" height="${plotH}"/>`;
            svg += `<path class="dc-col" data-i="${i}" d="M${x0} ${base} V${yt + rr} Q${x0} ${yt} ${x0 + rr} ${yt} H${x0 + colW - rr} Q${x0 + colW} ${yt} ${x0 + colW} ${yt + rr} V${base} Z"/>`;
            if (i === peak) svg += `<text class="dc-axis" x="${cx}" y="${yt - 6}" text-anchor="middle" style="fill:var(--text-2)">${d.mins}m</text>`;
        } else {
            svg += `<rect class="dc-hit" data-i="${i}" x="${ml + band * i}" y="${mt}" width="${band}" height="${plotH}"/>`;
        }
        if (i % 2 === 1 || i === days.length - 1) {
            svg += `<text class="dc-axis" x="${cx}" y="${H - 8}" text-anchor="middle">${i === days.length - 1 ? 'Today' : d.date.getDate()}</text>`;
        }
    });
    svg += '</svg>';

    const table = `<table class="sr-only"><caption>Minutes studied per day</caption><tbody>${days.map(d => `<tr><th scope="row">${fmtDay(d)}</th><td>${d.mins} minutes</td></tr>`).join('')}</tbody></table>`;
    const note = max === 0 ? '<p class="dc-empty">No study time logged in the last 14 days yet — finish a lesson and it shows up here.</p>' : '';
    el.innerHTML = svg + '<div class="dc-tip" hidden></div>' + table + note;

    const tip = $('.dc-tip', el);
    $$('.dc-hit', el).forEach(hit => {
        hit.addEventListener('mouseenter', () => {
            const i = +hit.dataset.i;
            const d = days[i];
            const col = $(`.dc-col[data-i="${i}"]`, el);
            if (col) col.classList.add('is-hot');
            tip.innerHTML = `<strong>${d.mins} min</strong>${fmtDay(d)}`;
            tip.style.left = `${((ml + band * i + band / 2) / W) * el.clientWidth}px`;
            tip.style.top = `${(y(d.mins) / H) * el.querySelector('svg').clientHeight}px`;
            tip.hidden = false;
        });
        hit.addEventListener('mouseleave', () => {
            tip.hidden = true;
            $$('.dc-col.is-hot', el).forEach(c => c.classList.remove('is-hot'));
        });
    });
}

function renderCityView() {
    City.mount($('#fullCity'));
    $('#cityLegend').innerHTML = `
        <span class="legend-item"><span class="legend-swatch built"></span>Built floor (lesson completed)</span>
        <span class="legend-item"><span class="legend-swatch next"></span>Under construction (up next)</span>
        <span class="legend-item"><span class="legend-swatch ghost"></span>Planned floor (locked)</span>`;
}

function renderMiniMap() {
    $('#miniMap').innerHTML = City.miniMapSVG({ interactive: true });
    $('#miniMapList').innerHTML = TOPICS.map(topic => {
        const p = getTopicProgress(topic.id);
        return `<li><button type="button" class="map-row" data-topic="${topic.id}" style="--c:${getTopicColor(topic.id)}">
            <span class="tl-icon">${topic.icon}</span>
            <span class="map-row-main"><span class="map-row-name">${escapeHtml(topic.shortName)}</span><span class="bar"><i style="width:${p.percent}%"></i></span></span>
            <span class="map-row-val">${p.completed}/${p.total}</span>
        </button></li>`;
    }).join('');
}

// --- Views / routing ---

const VIEWS = ['home', 'track', 'city', 'stats', 'flashcards', 'glossary', 'settings'];
const VIEW_TITLES = { home: 'Home', track: 'Learning Track', city: 'City View', stats: 'Statistics', flashcards: 'Flashcards', glossary: 'Glossary', settings: 'Settings' };
let activeView = 'home';

function viewFromHash() {
    const h = location.hash.replace('#', '');
    return VIEWS.includes(h) ? h : null;
}

function renderView(view) {
    if (view === 'track') renderTrackView();
    if (view === 'stats') renderStatsView();
    if (view === 'city') renderCityView();
}

function showView(view, { scroll = true } = {}) {
    activeView = view;
    $$('.view').forEach(section => { section.hidden = section.dataset.view !== view; });
    $$('[data-nav]').forEach(a => {
        if (a.dataset.nav === view) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
    });
    document.title = view === 'home' ? 'AI Academy — AI Engineering Roadmap' : `${VIEW_TITLES[view]} · AI Academy`;
    closeSidebar();
    renderView(view);
    if (view === 'home') City.scenes.forEach((st, el) => { if (el.id === 'heroCity') City.position(el); });
    if (scroll) window.scrollTo(0, 0);
}

function renderAll() {
    renderTowers();
    renderSidebar();
    renderMemoryCards();
    renderGlossary();
    renderActivity();
    renderNotifications();
    renderProfile();
    renderView(activeView);
    if (!$('#mapModal').hidden) renderMiniMap();
}

// --- Modals ---

let modalReturnFocus = null;

function focusables(root) {
    return $$('a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])', root)
        .filter(el => el.offsetParent !== null || el === document.activeElement);
}

function openModal(id, focusTarget) {
    const modal = $(id);
    if (modal.hidden) {
        if (!$$('.modal').some(m => !m.hidden)) modalReturnFocus = document.activeElement;
        modal.hidden = false;
        document.body.classList.add('modal-open');
    }
    const target = typeof focusTarget === 'string' ? $(focusTarget, modal) : focusTarget;
    (target || $('[data-close].icon-btn', modal) || focusables(modal)[0])?.focus({ preventScroll: true });
}

function closeModal(id) {
    const modal = $(id);
    if (modal.hidden) return;
    modal.hidden = true;
    if (!$$('.modal').some(m => !m.hidden)) {
        document.body.classList.remove('modal-open');
        if (modalReturnFocus && document.contains(modalReturnFocus)) modalReturnFocus.focus({ preventScroll: true });
        modalReturnFocus = null;
    }
    if (id === '#lessonModal' && ui.pendingRise.size) {
        renderTowers({ rise: true });
        setTimeout(() => ui.pendingRise.clear(), 50);
    }
}

function topOpenModal() {
    return $$('.modal').filter(m => !m.hidden).pop() || null;
}

// --- Actions ---

function openTopic(topicId, focusLessonId) {
    const topic = TOPICS[topicId];
    const progress = getTopicProgress(topic.id);
    const color = getTopicColor(topic.id);

    const icon = $('#lessonModalIcon');
    icon.style.setProperty('--c', color);
    icon.innerHTML = topic.icon;
    $('#lessonModalTitle').textContent = topic.name;
    $('#lessonModalSub').innerHTML = `${escapeHtml(topic.description)}
        <span class="modal-progress" style="--c:${color}"><span>${progress.completed} / ${progress.total} floors · ${progress.percent}%</span><span class="bar"><i style="width:${progress.percent}%"></i></span></span>`;

    $('#lessonModalBody').innerHTML = topic.lessons.map((lesson, i) => {
        const isCompleted = state.completedLessons[lesson.id];
        const isCurrent = !isCompleted && i === progress.completed;
        const isLocked = !isCompleted && i > progress.completed;
        const cls = isCompleted ? 'is-done' : isCurrent ? 'is-next' : 'is-locked';
        const status = isCompleted
            ? '<span class="status status-done">Completed</span>'
            : isCurrent ? '<span class="status status-next">Up next</span>' : `<span class="status status-locked">${ico('lock')}Locked</span>`;
        const action = isCompleted
            ? ''
            : isLocked
                ? `<span class="lesson-lock-note">${ico('lock')}Complete the previous floor first</span>`
                : `<button type="button" class="btn btn-primary" data-complete="${lesson.id}" data-topic="${topicId}">${ico('check')}Mark Complete</button>`;

        return `<article class="lesson ${cls}" id="lesson-${lesson.id}" style="--c:${color}">
            <div class="lesson-top">
                <span class="lesson-state">${isCompleted ? ico('check') : isLocked ? ico('lock') : i + 1}</span>
                <div class="lesson-main">
                    <h4 class="lesson-title">${escapeHtml(lesson.title)}</h4>
                    <div class="lesson-meta"><span>Floor ${i + 1}</span><span aria-hidden="true">·</span><span>${escapeHtml(lesson.duration)}</span>${status}</div>
                    <p class="lesson-desc">${escapeHtml(lesson.desc)}</p>
                    <ul class="kp" aria-label="Key points">${lesson.keyPoints.map(kp => `<li>${escapeHtml(kp)}</li>`).join('')}</ul>
                    ${action ? `<div class="lesson-actions">${action}</div>` : ''}
                </div>
            </div>
        </article>`;
    }).join('');

    const nextBtn = $('#lessonModalBody [data-complete]');
    openModal('#lessonModal', nextBtn || null);

    if (focusLessonId) {
        const el = document.getElementById(`lesson-${focusLessonId}`);
        if (el) {
            el.scrollIntoView({ block: 'center', behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
            el.classList.add('is-flash');
            setTimeout(() => el.classList.remove('is-flash'), 1600);
        }
    } else {
        const target = $('#lessonModalBody .lesson.is-next');
        if (target && target !== $('#lessonModalBody .lesson')) target.scrollIntoView({ block: 'nearest' });
    }
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

    // Save and re-render (the new floor rises when you're looking at the city)
    saveState(state);
    ui.pendingRise.add(lessonId);
    const modalOpen = !$('#lessonModal').hidden;
    renderAll();
    if (!modalOpen) {
        renderTowers({ rise: true });
        setTimeout(() => ui.pendingRise.clear(), 50);
    }

    // Show toast
    showToast('Lesson Complete!', `"${lesson.title}" — ${topic.shortName}`, 'success');

    // Refresh the modal
    if (modalOpen) openTopic(topicId);
}

function closeLessonModal() {
    closeModal('#lessonModal');
}

function openMap() {
    renderMiniMap();
    openModal('#mapModal');
}

function closeMap() {
    closeModal('#mapModal');
}

function openTerm(idx) {
    const item = GLOSSARY[idx];
    if (!item) return;
    $('#termModalTitle').textContent = item.term;
    $('#termModalDef').textContent = item.def;
    openModal('#termModal');
}

function flashElement(el) {
    if (!el) return;
    el.scrollIntoView({ block: 'center', behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    el.classList.add('is-flash');
    setTimeout(() => el.classList.remove('is-flash'), 1800);
}

function goToCard(idx) {
    ui.flashFilter = 'all';
    ui.flipped.add(idx);
    location.hash = '#flashcards';
    showView('flashcards', { scroll: false });
    renderMemoryCards();
    flashElement(document.getElementById(`card-${idx}`));
}

function goToTerm(idx) {
    location.hash = '#glossary';
    showView('glossary', { scroll: false });
    flashElement(document.getElementById(`term-${idx}`));
}

function resetProgress() {
    const name = state.profileName;
    state = getDefaultState();
    if (name) state.profileName = name;
    saveState(state);
    ui.flipped.clear();
    renderAll();
    showToast('Progress reset', 'Your city is cleared and ready to rebuild.', 'info');
}

// --- Search ---

const search = { results: [], active: -1 };

function highlight(text, query) {
    const safe = escapeHtml(text);
    if (!query) return safe;
    const pattern = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return safe.replace(new RegExp(`(${pattern})`, 'ig'), '<mark>$1</mark>');
}

function toggleSearch(force) {
    const box = $('#search');
    const open = typeof force === 'boolean' ? force : !box.classList.contains('is-open');
    box.classList.toggle('is-open', open);
    if (open) $('#searchInput').focus();
    else closeSearchResults();
}

function closeSearchResults() {
    const list = $('#searchResults');
    list.hidden = true;
    $('#searchInput').setAttribute('aria-expanded', 'false');
    $('#searchInput').removeAttribute('aria-activedescendant');
    search.active = -1;
}

function performSearch(query) {
    const q = query.trim();
    const list = $('#searchResults');
    if (!q) {
        closeSearchResults();
        return;
    }
    const ql = q.toLowerCase();
    const has = s => String(s || '').toLowerCase().includes(ql);

    const topics = TOPICS.filter(t => has(t.name) || has(t.shortName) || has(t.description))
        .map(t => ({ kind: 'topic', topic: t.id, title: t.name, meta: t.description, glyph: t.glyph, color: getTopicColor(t.id) }));
    const lessons = [];
    TOPICS.forEach(t => t.lessons.forEach((l, i) => {
        if (has(l.title) || has(l.desc) || l.keyPoints.some(has)) {
            lessons.push({ kind: 'lesson', topic: t.id, lesson: l.id, title: l.title, meta: `${t.shortName} · Floor ${i + 1} · ${l.duration}`, glyph: t.glyph, color: getTopicColor(t.id) });
        }
    }));
    const cards = MEMORY_CARDS.map((c, idx) => ({ c, idx })).filter(({ c }) => has(c.title) || has(c.body))
        .map(({ c, idx }) => ({ kind: 'card', idx, title: c.title, meta: c.body, glyph: 'memory', color: '#a5b4fc' }));
    const terms = GLOSSARY.map((g, idx) => ({ g, idx })).filter(({ g }) => has(g.term) || has(g.def))
        .map(({ g, idx }) => ({ kind: 'term', idx, title: g.term, meta: g.def, glyph: 'book', color: '#4ade80' }));

    const groups = [
        { label: 'Topics', items: topics.slice(0, 4) },
        { label: 'Lessons', items: lessons.slice(0, 6) },
        { label: 'Memory cards', items: cards.slice(0, 4) },
        { label: 'Glossary', items: terms.slice(0, 4) }
    ].filter(g => g.items.length);

    search.results = groups.flatMap(g => g.items);
    search.active = -1;

    if (!search.results.length) {
        const ideas = ['Transformer', 'RAG', 'Drift', 'Embedding'];
        list.innerHTML = `<div class="sr-empty">No matches for “${escapeHtml(q)}”. Try one of these:
            <div class="chips">${ideas.map(s => `<button type="button" class="chip" data-suggest="${s}">${s}</button>`).join('')}</div></div>`;
    } else {
        let n = 0;
        list.innerHTML = groups.map(g => `<div class="sr-group" role="group" aria-label="${g.label}">
            <div class="sr-group-title" aria-hidden="true">${g.label}</div>
            ${g.items.map(item => {
                const idx = n++;
                return `<button type="button" class="sr-item" role="option" id="sr-${idx}" data-sr="${idx}" aria-selected="false" tabindex="-1">
                    <span class="sr-dot" style="--c:${item.color}"><svg class="i" aria-hidden="true"><use href="#i-${item.glyph}"/></svg></span>
                    <span class="sr-main"><span class="sr-title">${highlight(item.title, q)}</span><span class="sr-meta">${highlight(item.meta, q)}</span></span>
                </button>`;
            }).join('')}
        </div>`).join('');
    }
    list.hidden = false;
    $('#searchInput').setAttribute('aria-expanded', 'true');
}

function setActiveResult(idx) {
    const items = $$('.sr-item');
    if (!items.length) return;
    search.active = (idx + items.length) % items.length;
    items.forEach((el, i) => el.setAttribute('aria-selected', String(i === search.active)));
    const el = items[search.active];
    el.scrollIntoView({ block: 'nearest' });
    $('#searchInput').setAttribute('aria-activedescendant', el.id);
}

function activateResult(idx) {
    const item = search.results[idx];
    if (!item) return;
    closeSearchResults();
    $('#searchInput').blur();
    $('#search').classList.remove('is-open');
    if (item.kind === 'topic') openTopic(item.topic);
    if (item.kind === 'lesson') openTopic(item.topic, item.lesson);
    if (item.kind === 'card') goToCard(item.idx);
    if (item.kind === 'term') openTerm(item.idx);
}

// --- Chrome: sidebar + popovers ---

function openSidebar() {
    $('#sidebar').classList.add('is-open');
    $('#scrim').hidden = false;
    $('#menuBtn').setAttribute('aria-expanded', 'true');
    $('.nav-item[aria-current]')?.focus();
}

function closeSidebar() {
    if (!$('#sidebar').classList.contains('is-open')) return;
    $('#sidebar').classList.remove('is-open');
    $('#scrim').hidden = true;
    $('#menuBtn').setAttribute('aria-expanded', 'false');
}

function togglePopover(btnSel, panelSel, force) {
    const btn = $(btnSel), panel = $(panelSel);
    const open = typeof force === 'boolean' ? force : panel.hidden;
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
}

function closePopovers() {
    togglePopover('#notifBtn', '#notifPanel', false);
    togglePopover('#profileBtn', '#profileMenu', false);
}

function dayOfYear() {
    const now = new Date();
    return Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
}

// --- Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    injectSharedDefs();
    ui.memoryIndex = dayOfYear() % MEMORY_CARDS.length;
    City.mount($('#heroCity'));
    renderAll();
    showView(viewFromHash() || 'home', { scroll: false });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => City.scenes.forEach((st, el) => City.position(el)));

    // Routing (hash links such as the skip link are left alone)
    window.addEventListener('hashchange', () => {
        const view = viewFromHash();
        if (view) showView(view);
    });

    // One delegated click handler for all dynamic content
    document.addEventListener('click', (e) => {
        const t = e.target;

        const completeBtn = t.closest('[data-complete]');
        if (completeBtn) {
            completeLesson(completeBtn.dataset.complete, +completeBtn.dataset.topic);
            return;
        }

        const closer = t.closest('[data-close]');
        if (closer) {
            const modal = closer.closest('.modal');
            if (modal) closeModal(`#${modal.id}`);
            if (closer.tagName !== 'A') return;
        }

        const sr = t.closest('[data-sr]');
        if (sr) { activateResult(+sr.dataset.sr); return; }

        const suggest = t.closest('[data-suggest]');
        if (suggest) {
            const input = $('#searchInput');
            input.value = suggest.dataset.suggest;
            performSearch(input.value);
            input.focus();
            return;
        }

        const termBtn = t.closest('[data-term]');
        if (termBtn) { openTerm(+termBtn.dataset.term); return; }

        const card = t.closest('[data-card]');
        if (card) {
            const idx = +card.dataset.card;
            if (ui.flipped.has(idx)) ui.flipped.delete(idx); else ui.flipped.add(idx);
            const wrap = card.closest('.flash');
            const flipped = ui.flipped.has(idx);
            wrap.classList.toggle('is-flipped', flipped);
            card.setAttribute('aria-pressed', String(flipped));
            card.setAttribute('aria-label', `${MEMORY_CARDS[idx].title}. ${flipped ? MEMORY_CARDS[idx].body : 'Press to reveal the answer.'}`);
            return;
        }

        const filter = t.closest('[data-filter]');
        if (filter) { ui.flashFilter = filter.dataset.filter; renderMemoryCards(); $(`[data-filter="${ui.flashFilter}"]`)?.focus(); return; }

        const mc = t.closest('[data-mc]');
        if (mc) {
            const action = mc.dataset.mc;
            if (action === 'reveal') ui.memoryRevealed = !ui.memoryRevealed;
            else {
                ui.memoryIndex = (ui.memoryIndex + (action === 'next' ? 1 : -1) + MEMORY_CARDS.length) % MEMORY_CARDS.length;
                ui.memoryRevealed = false;
            }
            renderMemoryCards();
            return;
        }

        const topicEl = t.closest('[data-topic]');
        if (topicEl && !topicEl.closest('#search') && !topicEl.closest('#cityMapBtn')) {
            if (topicEl.closest('#mapModal')) closeMap();
            closePopovers();
            openTopic(+topicEl.dataset.topic, topicEl.dataset.lesson);
            return;
        }

        // click-away for popovers and search
        if (!t.closest('.pop-anchor')) closePopovers();
        if (!t.closest('#search') && !t.closest('#searchToggle')) {
            closeSearchResults();
            if (window.innerWidth <= 760) $('#search').classList.remove('is-open');
        }
    });

    // Hover link between a tower and its floating label
    document.addEventListener('mouseover', (e) => {
        const hot = e.target.closest('.city-scene [data-topic]');
        $$('.city-scene .is-hot').forEach(el => { if (!hot || el.dataset.topic !== hot.dataset.topic) el.classList.remove('is-hot'); });
        if (hot) {
            const scene = hot.closest('.city-scene');
            $$(`[data-topic="${hot.dataset.topic}"]`, scene).forEach(el => el.classList.add('is-hot'));
        }
    });

    // Search
    const input = $('#searchInput');
    input.addEventListener('input', (e) => performSearch(e.target.value));
    input.addEventListener('focus', () => { if (input.value.trim()) performSearch(input.value); });
    input.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); setActiveResult(search.active + 1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveResult(search.active - 1); }
        else if (e.key === 'Enter') {
            e.preventDefault();
            if (search.results.length) activateResult(search.active >= 0 ? search.active : 0);
        }
    });
    $('#searchToggle').addEventListener('click', () => toggleSearch());

    // Top bar
    $('#menuBtn').addEventListener('click', () => ($('#sidebar').classList.contains('is-open') ? closeSidebar() : openSidebar()));
    $('#scrim').addEventListener('click', closeSidebar);
    $('#notifBtn').addEventListener('click', (e) => { e.stopPropagation(); togglePopover('#profileBtn', '#profileMenu', false); togglePopover('#notifBtn', '#notifPanel'); });
    $('#profileBtn').addEventListener('click', (e) => { e.stopPropagation(); togglePopover('#notifBtn', '#notifPanel', false); togglePopover('#profileBtn', '#profileMenu'); });
    $('#profileMenu').addEventListener('click', () => closePopovers());

    // Home widgets
    $('#rangeSelect').addEventListener('change', renderSidebar);
    $('#cityMapBtn').addEventListener('click', openMap);
    $('#openMapBtn').addEventListener('click', openMap);
    const zoom = (delta) => {
        ui.mapZoom = Math.min(1.8, Math.max(0.8, Math.round((ui.mapZoom + delta) * 10) / 10));
        const g = $('#cityMap .mm-zoom');
        if (g) g.style.transform = `scale(${ui.mapZoom})`;
    };
    $('#zoomIn').addEventListener('click', () => zoom(0.2));
    $('#zoomOut').addEventListener('click', () => zoom(-0.2));
    $('#memoryCard').addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();
            ui.memoryIndex = (ui.memoryIndex + (e.key === 'ArrowRight' ? 1 : -1) + MEMORY_CARDS.length) % MEMORY_CARDS.length;
            ui.memoryRevealed = false;
            renderMemoryCards();
            $(`#memoryCard [data-mc="${e.key === 'ArrowRight' ? 'next' : 'prev'}"]`)?.focus();
        }
    });

    // Map modal: keyboard activation for towers drawn in the SVG
    $('#miniMap').addEventListener('keydown', (e) => {
        const tower = e.target.closest('.mm-tower');
        if (tower && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            closeMap();
            openTopic(+tower.dataset.topic);
        }
    });

    // Settings
    $('#profileForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = $('#nameInput').value.trim().slice(0, 32);
        if (!name) return;
        state.profileName = name;
        saveState(state);
        renderProfile();
        showToast('Profile saved', `Hi, ${name}!`, 'success');
    });
    $('#resetBtn').addEventListener('click', () => openModal('#confirmModal', '#confirmModal [data-close]'));
    $('#confirmReset').addEventListener('click', () => { closeModal('#confirmModal'); resetProgress(); });

    // Re-render the chart when the stats page is resized
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { if (activeView === 'stats') renderDailyChart(); }, 150);
    });

    // Relative timestamps stay fresh
    setInterval(renderActivity, 60000);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = topOpenModal();
            if (modal) { closeModal(`#${modal.id}`); return; }
            if (!$('#searchResults').hidden || $('#search').classList.contains('is-open')) {
                closeSearchResults();
                $('#search').classList.remove('is-open');
                $('#searchInput').blur();
                return;
            }
            closePopovers();
            closeSidebar();
        }
        if (e.key === 'Tab') {
            const modal = topOpenModal();
            if (modal) {
                const f = focusables(modal);
                if (!f.length) return;
                const first = f[0], last = f[f.length - 1];
                if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        }
        if (e.key === '/' && !e.ctrlKey && !e.metaKey && !topOpenModal()) {
            const active = document.activeElement;
            if (active.tagName !== 'INPUT' && active.tagName !== 'TEXTAREA' && active.tagName !== 'SELECT') {
                e.preventDefault();
                toggleSearch(true);
            }
        }
    });
});
