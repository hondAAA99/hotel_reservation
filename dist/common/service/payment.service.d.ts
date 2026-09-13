import Stripe from 'stripe';
export declare class paymentService {
    private stripe;
    constructor();
    checkout({ customer_email, metadata, success_url, cancel_url, discounts, mode, line_items, }: Stripe.Checkout.SessionCreateParams): Promise<Stripe.Response<Stripe.Checkout.Session>>;
}
//# sourceMappingURL=payment.service.d.ts.map