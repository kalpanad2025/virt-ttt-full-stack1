var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UserAccount_password;
//  Implement a user account system where each user has a private password field. 
// Allow setting and validating password only through methods. Extend this to an admin user that can reset passwords for other users.
// Base UserAccount class
var UserAccount = /** @class */ (function () {
    function UserAccount(username) {
        this.username = username;
        _UserAccount_password.set(this, void 0);
        __classPrivateFieldSet(this, _UserAccount_password, "", "f");
    }
    UserAccount.prototype.setPassword = function (newPassword) {
        if (newPassword.length < 6) {
            throw new Error("Password must be at least 6 characters.");
        }
        __classPrivateFieldSet(this, _UserAccount_password, newPassword, "f");
    };
    UserAccount.prototype.validatePassword = function (password) {
        return __classPrivateFieldGet(this, _UserAccount_password, "f") === password;
    };
    UserAccount.prototype.resetPasswordByAdmin = function (newPassword) {
        __classPrivateFieldSet(this, _UserAccount_password, newPassword, "f");
    };
    return UserAccount;
}());
_UserAccount_password = new WeakMap();
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminUser.prototype.resetUserPassword = function (user, newPassword) {
        user.resetPasswordByAdmin(newPassword);
        console.log("Admin reset password for ".concat(user.username));
    };
    return AdminUser;
}(UserAccount));
// Usage example
var user1 = new UserAccount("alice");
user1.setPassword("secret123");
console.log(user1.validatePassword("wrong")); // false
console.log(user1.validatePassword("secret123")); // true
var admin = new AdminUser("admin");
admin.setPassword("adminpass");
admin.resetUserPassword(user1, "newpass456");
console.log(user1.validatePassword("secret123")); // false
console.log(user1.validatePassword("newpass456")); // true
//output
//D:\TECH\virt-ttt-full-stack1\ts>node dist/2.admin.js
//false
//true
//Admin reset password for alice
//false
//true
