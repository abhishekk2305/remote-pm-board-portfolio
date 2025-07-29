{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # Kanban Board Test\
\
import React from 'react';\
import \{ render, screen \} from '@testing-library/react';\
import KanbanBoard from './KanbanBoard';\
\
test('renders Kanban board with three columns', () => \{\
  render(<KanbanBoard />);\
  \
  const todoColumn = screen.getByText(/To Do/i);\
  const inProgressColumn = screen.getByText(/In Progress/i);\
  const doneColumn = screen.getByText(/Done/i);\
  \
  expect(todoColumn).toBeInTheDocument();\
  expect(inProgressColumn).toBeInTheDocument();\
  expect(doneColumn).toBeInTheDocument();\
\});\
\
test('displays tasks correctly', () => \{\
  const tasks = [\
    \{ id: 1, title: 'Task 1', status: 'To Do' \},\
    \{ id: 2, title: 'Task 2', status: 'In Progress' \},\
    \{ id: 3, title: 'Task 3', status: 'Done' \},\
  ];\
\
  render(<KanbanBoard tasks=\{tasks\} />);\
  \
  expect(screen.getByText(/Task 1/i)).toBeInTheDocument();\
  expect(screen.getByText(/Task 2/i)).toBeInTheDocument();\
  expect(screen.getByText(/Task 3/i)).toBeInTheDocument();\
\});\
}