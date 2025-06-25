import React, { useState } from 'react';
import { Bot, Tags, ClipboardList, MessagesSquare, ChartLine, Database, Upload, Eye, Info } from 'lucide-react';

import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import Checkbox from '../components/ui/Checkbox';

const AgentSettings: React.FC = () => {
  const [showCustomRole, setShowCustomRole] = useState(false);
  const [showCustomDescription, setShowCustomDescription] = useState(false);
  const [showCustomSales, setShowCustomSales] = useState(false);

  return (
    <div className="p-8">
      <PageHeader title="Налаштування АІ-агента" icon={Bot} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="Основні налаштування" icon={Tags}>
          <div className="space-y-4">
            <Select label="Товар чи послуга" id="productType">
              <option>Оберіть тип</option>
              <option>Товар</option>
              <option>Послуга</option>
            </Select>
            <Input label="Ім'я, ким ти представляєшся" id="agentName" placeholder="Анна, Олексій, тощо" />
            <div>
              <Select
                label="Роль"
                id="agentRole"
                onChange={(e) => setShowCustomRole(e.target.value === 'custom')}
              >
                <option>Оберіть роль</option>
                <option>Менеджер з продажів</option>
                <option>Консультант</option>
                <option>Спеціаліст</option>
                <option value="custom">Своя роль</option>
              </Select>
              {showCustomRole && (
                <Input
                  id="customRole"
                  placeholder="Введіть свою роль"
                  className="mt-2"
                />
              )}
            </div>
            <Input label="Назва компанії" id="companyName" placeholder="Beauty Store, Tech Solutions, тощо" />
          </div>
        </Card>

        <Card title="Опис продукту/послуги" icon={ClipboardList}>
          <div>
            <Select
              label="Загальний опис"
              id="productDescription"
              onChange={(e) => setShowCustomDescription(e.target.value === 'custom')}
            >
              <option>Оберіть категорію</option>
              <option>Інстаграм магазин косметики для волосся</option>
              <option>Онлайн магазин одягу</option>
              <option>Сервіс доставки їжі</option>
              <option>Консультаційні послуги</option>
              <option value="custom">Свій варіант</option>
            </Select>
            {showCustomDescription && (
              <textarea
                id="customDescription"
                placeholder="Опишіть детально ваш продукт або послугу..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-32 mt-2"
              ></textarea>
            )}
          </div>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="Tone of Voice" icon={MessagesSquare}>
          <p className="text-sm text-gray-600 mb-4">Оберіть стиль спілкування (можна декілька)</p>
          <div className="grid grid-cols-2 gap-3">
            <Checkbox label="Професійно" />
            <Checkbox label="Дружньо" />
            <Checkbox label="Емоційно" />
            <Checkbox label="Аргументовано" />
            <Checkbox label="Впевнено" />
            <Checkbox label="Підтримуюче" />
            <Checkbox label="Неформально" />
            <Checkbox label="Експертно" />
          </div>
        </Card>

        <Card title="Система продажів" icon={ChartLine}>
            <div className="space-y-4">
                 {/* AIDA and SPIN options */}
                <label className="flex items-start p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="salesSystem" value="aida" className="mt-1 mr-3" onChange={() => setShowCustomSales(false)}/>
                    <div>
                        <div className="font-medium">AIDA</div>
                        <div className="text-sm text-gray-600">Attention → Interest → Desire → Action</div>
                    </div>
                </label>
                <label className="flex items-start p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="salesSystem" value="spin" className="mt-1 mr-3" onChange={() => setShowCustomSales(false)}/>
                    <div>
                        <div className="font-medium">SPIN</div>
                        <div className="text-sm text-gray-600">Situation → Problem → Implication → Need-payoff</div>
                    </div>
                </label>
                 <label className="flex items-start p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="salesSystem" value="custom" className="mt-1 mr-3" onChange={() => setShowCustomSales(true)}/>
                    <div>
                        <div className="font-medium">Свій варіант</div>
                        <div className="text-sm text-gray-600">Завантажте приклади переписок</div>
                    </div>
                </label>
            </div>
            {showCustomSales && (
                <div className="mt-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto text-3xl text-gray-400 mb-2" />
                        <p className="text-gray-600">Перетягніть файли з прикладами переписок або</p>
                        <Button variant="primary" className="mt-2 px-4 py-2 text-sm">Оберіть файли</Button>
                    </div>
                </div>
            )}
        </Card>
      </div>

      <Card title="Інтеграція з CRM" icon={Database} className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Select label="CRM система" id="crmSystem">
            <option>KeyCRM</option>
            <option>Немає CRM</option>
          </Select>
          <Input label="Посилання на CRM" type="url" id="crmUrl" placeholder="https://your-crm.keycrm.app" />
          <div className="lg:col-span-2">
            <label htmlFor="crmApiKey" className="block text-sm font-medium text-gray-700 mb-2">API ключ</label>
            <div className="flex">
              <Input type="password" id="crmApiKey" placeholder="Введіть API ключ" containerClassName="flex-1" className="rounded-r-none" />
              <button className="px-4 py-3 bg-gray-200 border border-l-0 border-gray-300 rounded-r-lg hover:bg-gray-300">
                <Eye size={18} />
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2 flex items-center">
              <Info size={14} className="mr-1" />
              <a href="#" className="text-blue-600 hover:underline">Де отримати API ключ KeyCRM?</a>
            </p>
          </div>
        </div>
      </Card>

      <div className="mt-8 flex justify-end space-x-4">
        <Button variant="secondary">Скасувати</Button>
        <Button variant="primary">Зберегти налаштування</Button>
      </div>
    </div>
  );
};

export default AgentSettings; 