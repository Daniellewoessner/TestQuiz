import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AnsweredQuestion from '../src/components/AnsweredQuestions';
import React from 'react';
// This test is designed to fail initially
// You'll need to fix it by creating the AnsweredQuestion component

describe('AnsweredQuestion Component', () => {
  it('should toggle the "answered" status when clicked', () => {
    // Render the component
    render(<AnsweredQuestion questionId="123" initialAnswered={false} />);
    
    // Get the checkbox element
    const checkbox = screen.getByRole('checkbox');
    
    // Initially should be unchecked
    expect(checkbox).not.toBeChecked();
    
    // Click the checkbox
    fireEvent.click(checkbox);
    
    // Should now be checked
    expect(checkbox).toBeChecked();
    
    // Click it again
    fireEvent.click(checkbox);
    
    // Should be unchecked again
    expect(checkbox).not.toBeChecked();
  });
});