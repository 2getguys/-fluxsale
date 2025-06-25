import React from 'react';
import { UserCog, CreditCard, Info, Eye } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const SettingsPage: React.FC = () => {
  return (
    <div className="p-8">
      <PageHeader title="Налаштування" icon={UserCog} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="Дані користувача" icon={UserCog}>
          <div className="space-y-4">
            <Input label="Ім'я" id="userName" />
            <Input label="Email" id="userEmail" type="email" />
            <Input label="Телефон" id="userPhone" type="tel" />
            <Input label="Компанія" id="userCompany" />
          </div>
        </Card>

        <Card title="Платіжні налаштування" icon={CreditCard}>
          <div className="mb-6">
            <h4 className="font-medium text-gray-700 mb-3">WayForPay</h4>
            <div className="space-y-4">
              <Input label="Merchant ID" id="merchantId" />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Merchant Secret Key</label>
                <div className="flex">
                  <Input type="password" id="merchantSecret" containerClassName="flex-1" className="rounded-r-none" />
                  <button className="px-4 py-3 bg-gray-200 border border-l-0 border-gray-300 rounded-r-lg hover:bg-gray-300">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
              <Input label="Redirect URL після оплати" id="redirectUrl" type="url" placeholder="https://yoursite.com/success" />
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start">
              <Info className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Як отримати дані WayForPay:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Зареєструйтеся на wayforpay.com</li>
                  <li>Підтвердіть свій бізнес</li>
                  <li>В особистому кабінеті знайдіть API дані</li>
                </ol>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-8 flex justify-end space-x-4">
        <Button variant="secondary">Скасувати</Button>
        <Button variant="primary">Зберегти налаштування</Button>
      </div>
    </div>
  );
};

export default SettingsPage; 