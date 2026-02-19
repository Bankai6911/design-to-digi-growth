import { motion } from "framer-motion";
import { Search, Users, Share2, Code } from "lucide-react";

const steps = [
{ icon: Search, title: "Discovery", desc: "We analyze your business, audience, and competition to build a solid foundation." },
{ icon: Users, title: "Strategy", desc: "We craft a data-driven marketing plan tailored to your goals and budget." },
{ icon: Code, title: "Website & Media", desc: "We build conversion-optimized websites and manage your digital media presence." },
{ icon: Share2, title: "Social Media Ads", desc: "We launch targeted ad campaigns on Facebook & Instagram for maximum ROI." }];


const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Process = () => {};

























export default Process;