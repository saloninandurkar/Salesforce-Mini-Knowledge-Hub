Knowledge Hub 📚

A Salesforce-based Knowledge Management System (KMS) designed to centralize, manage, and share knowledge articles within an organization. The project automates content updates, provides analytics on article engagement, and ensures controlled access for internal and external users.

This project was built phase-wise to cover the entire Salesforce ecosystem — from data modeling to automation, Apex programming, analytics, and deployment.

📑 Table of Contents

Phase 1: Problem Statement & Goals

Phase 2: Salesforce Setup

Phase 3: Data Modeling & Relationships

Phase 4: Process Automation (Admin)

Phase 5: Apex Programming (Developer)

Phase 6: Integration (API & External Systems)

Phase 7: LWC & UI Enhancements

Phase 8: Testing & Deployment

Phase 9: Reporting, Dashboards & Security

Phase 10: Final Presentation & Demo Day

Phase 1: Problem Statement & Goals

🎯 Problem Statement
Organizations face challenges in managing knowledge efficiently:

Manual handling of article creation, updates, and approvals

Lack of tracking for article views, contributions, and relevance

Limited automated notifications for users

Difficulty in providing public access while controlling visibility

✅ Goals

Centralize all knowledge articles in Salesforce

Automate updates, notifications, and approval workflows

Track engagement and contribution metrics

Provide actionable insights with reports and dashboards

Allow secure access for internal and public users

Phase 2: Salesforce Setup

Steps Followed:

Created Salesforce Developer Org

Configured Company Information:

Company Name: Knowledge Hub

Currency: INR (₹)

Locale: English (India)

Created Profiles & Roles:

Admin

Author

Viewer

Manager

Enabled Features:

Knowledge Management

Email Deliverability

Reports & Dashboards

Experience Cloud (Guest Site Access)

Phase 3: Data Modeling & Relationships

Custom Objects Created:

Knowledge_Article__c → Fields: Title, Category, Content, Author Lookup, Status, Last Updated, View Count

Author__c → Fields: Name, Email, Role, Articles Contributed

Category__c → Fields: Name, Description

Relationships:

Author → Knowledge_Article = 1:M

Category → Knowledge_Article = 1:M

Phase 4: Process Automation (Admin)

Automations Implemented:

Validation Rules:

Ensure Title is mandatory

Status cannot be blank

Workflow Rules / Flow Builder:

Auto-update Last Updated field on edit

Weekly digest of new and updated articles

Approval process for articles requiring manager review

Notifications to authors on article updates

Phase 5: Apex Programming (Developer)

Key Implementations:

Trigger: Auto-increment view count on article view

Scheduled Apex: Weekly digest emails sent to subscribers

Batch Apex: Monthly author contribution report

Queueable Apex: Bulk import of articles from CSV

Test Classes: Achieved 85%+ coverage on triggers & classes

Phase 6: Integration (API & External Systems)

Integrations Implemented:

REST API → Fetch external references for articles

Email-to-Case → Convert user feedback into cases

Slack Integration → Notify authors of article approvals

Phase 7: LWC & UI Enhancements

UI Enhancements Implemented:

LWC Component (a): Article Search → Keyword-based search

LWC Component (b): Author Dashboard → Contribution summary

LWC Component (c): Category Filter → Filter articles by category

Responsive Experience Builder pages for public/guest access

Phase 8: Testing & Deployment

Steps Taken:

Sandbox Testing: Validated flows, triggers, LWCs, and APIs

Deployment via Change Sets: Migrated Sandbox → Production

Post-Deployment Checks:

Verified reports and dashboards

Ensured security roles work correctly

Tested automation flows

Phase 9: Reporting, Dashboards & Security

Reports Created:

Top Articles by Views

New Articles in Last 30 Days

Author Contribution Analytics

Dashboards:

Knowledge Engagement Dashboard

Author Contribution Overview

Popular Categories Insights

Security Settings:

OWD: Knowledge_Article__c = Private

Role Hierarchy: Manager > Author > Viewer

Guest access enabled for published articles only

Audit Trail enabled for monitoring changes

Phase 10: Final Presentation & Demo Day

Pitch: Knowledge Hub centralizes knowledge management, automates workflows, tracks engagement, and enables secure access to foster organizational learning.

Demo Flow:

Article Creation & Editing

Author Assignment & Approval

Article Search & Category Filtering

Article View Tracking

Weekly Digest & Notifications

Dashboard Analytics & Reports

Guest User Access

Handoff Docs:

Admin Setup Guide

Author User Manual

Public User Guide

Showcase: Presented as a Knowledge Management Salesforce Project highlighting real-world business automation skills.

👨‍💻 Built With

Salesforce Lightning Platform

Apex (Triggers, Batch, Queueable, Scheduled)

LWC (Lightning Web Components)

REST APIs for Integration

Reports & Dashboards

📌 Author

Saloni Nandurkar
B.Tech Final Year | Computer Science Engineering
Prof. Ram Meghe Institute of Technology and Research, Amravati
