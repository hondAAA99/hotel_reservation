import Stripe from 'stripe';
import { CANCEL_URL, STRIPE_SECRET_KEY, SUCCESS_URL, } from '../../config/config.js';
export class paymentService {
    stripe;
    constructor() {
        this.stripe = new Stripe(STRIPE_SECRET_KEY);
    }
    async checkout({ customer_email, metadata = {}, success_url = CANCEL_URL, cancel_url = SUCCESS_URL, discounts = [], mode = 'payment', line_items, }) {
        const sessionCreateParams = {
            ...(customer_email !== undefined ? { customer_email } : {}),
            ...(metadata !== undefined ? { metadata } : {}),
            ...(success_url !== undefined ? { success_url } : {}),
            ...(cancel_url !== undefined ? { cancel_url } : {}),
            ...(discounts !== undefined ? { discounts } : {}),
            ...(mode !== undefined ? { mode } : {}),
            ...(line_items !== undefined ? { line_items } : {}),
        };
        const session = await this.stripe.checkout.sessions.create(sessionCreateParams);
        return session;
    }
}
//# sourceMappingURL=payment.service.js.map