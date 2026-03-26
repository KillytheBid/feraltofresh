import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addSubmission } from '../features/bookingSlice';
import { setLoading, setSuccess, setError } from '../features/uiSlice';
import { sendQuoteEmail } from '../services/emailService';
import Button from './Button';
import Input from './Input';
import Spinner from './Spinner';

const QuoteForm = ({ showTitle = true, minimal = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      serviceType: 'residential',
      propertySize: 'medium',
    },
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const serviceTypes = [
    { value: 'residential', label: 'Residential Cleaning' },
    { value: 'commercial', label: 'Commercial Cleaning' },
    { value: 'deep-clean', label: 'Deep Clean' },
    { value: 'move-in-out', label: 'Move-In/Out' },
  ];

  const propertySizes = [
    { value: 'small', label: 'Small (Under 1000 sq ft)' },
    { value: 'medium', label: 'Medium (1000-2500 sq ft)' },
    { value: 'large', label: 'Large (2500-5000 sq ft)' },
    { value: 'extra-large', label: 'Extra Large (5000+ sq ft)' },
  ];

  const onSubmit = async (data) => {
    // Honeypot anti-spam: bots often fill hidden fields.
    if (data.honeypot) {
      dispatch(setError('Spam detected.'));
      return;
    }

    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const result = await sendQuoteEmail(data);

      dispatch(addSubmission(data));
      dispatch(setSuccess('Quote request sent successfully! Check your email for confirmation.'));
      reset();
    } catch (error) {
      dispatch(setError(error.message || 'Failed to send quote request. Please try again.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className={`${minimal ? 'bg-white' : 'bg-light'} rounded-lg ${minimal ? 'p-6' : 'p-8'}`}>
      {showTitle && !minimal && (
        <h2 className="text-3xl font-bold mb-2 text-dark">Get Your Free Quote</h2>
      )}
      {showTitle && !minimal && (
        <p className="text-gray-600 mb-6">
          Fill out the form below and we'll provide a personalized estimate within 24 hours.
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <Input
            label="Full Name"
            placeholder="John Doe"
            required
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
            })}
            error={errors.name?.message}
          />

          {/* Email */}
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            required
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            error={errors.email?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phone */}
          <Input
            label="Phone Number"
            type="tel"
            placeholder="(123) 456-7890"
            required
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[\d\s\-\(\)+]{10,}$/,
                message: 'Invalid phone number',
              },
            })}
            error={errors.phone?.message}
          />

          {/* Service Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Type
              <span className="text-red-500">*</span>
            </label>
            <select
              {...register('serviceType', { required: 'Please select a service type' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
            >
              {serviceTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.serviceType && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.serviceType.message}
              </span>
            )}
          </div>
        </div>

        {/* Property Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Size
            <span className="text-red-500">*</span>
          </label>
          <select
            {...register('propertySize', { required: 'Please select property size' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            {propertySizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
          {errors.propertySize && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.propertySize.message}
            </span>
          )}
        </div>

        {/* Honeypot field (invisible to users) */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="honeypot">Leave this field empty</label>
          <input
            id="honeypot"
            type="text"
            autoComplete="off"
            tabIndex="-1"
            {...register('honeypot')}
            className="w-full"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Notes
          </label>
          <textarea
            {...register('notes')}
            placeholder="Tell us more about your cleaning needs..."
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          fullWidth
          loading={loading}
          disabled={loading}
          className="mt-6"
        >
          {loading ? 'Sending...' : 'Get Quote'}
        </Button>
      </form>
    </div>
  );
};

export default QuoteForm;
