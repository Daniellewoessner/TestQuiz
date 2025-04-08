import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Quiz from '../src/components/Quiz';
import React from 'react';

// Mock the question API
vi.mock('../src/services/questionApi', () => ({
  getQuestions: vi.fn().mockResolvedValue([
    {
      _id: '1',
      question: 'What is React?',
      answers: [
        { text: 'A JavaScript library', isCorrect: true },
        { text: 'A programming language', isCorrect: false },
        { text: 'A database', isCorrect: false },
      ],
    },
  ]),
}));

describe('Quiz Component', () => {
  it('renders the start button initially', () => {
    render(<Quiz />);
    expect(screen.getByText('Start Quiz')).toBeInTheDocument();
  });
});