# Interface Design for Testability

Good interfaces make testing natural:

1. **Accept dependencies, don't create them**

   ```typescript
   // Testable
   function processOrder(order, paymentGateway) {}

   // Hard to test
   function processOrder(order) {
     const gateway = new StripeGateway();
   }
   ```

   ```java
   // Testable
   public void processOrder(Order order, PaymentGateway paymentGateway) {}

   // Hard to test
   public void processOrder(Order order) {
       PaymentGateway gateway = new StripeGateway();
   }
   ```

2. **Return results, don't produce side effects**

   ```typescript
   // Testable
   function calculateDiscount(cart): Discount {}

   // Hard to test
   function applyDiscount(cart): void {
     cart.total -= discount;
   }
   ```

   ```java
   // Testable
   public Discount calculateDiscount(Cart cart) { ... }

   // Hard to test
   public void applyDiscount(Cart cart) {
       cart.setTotal(cart.getTotal() - discount);
   }
   ```

3. **Small surface area**
    - Fewer methods = fewer tests needed
    - Fewer params = simpler test setup